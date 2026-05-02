import { useRef, useEffect, useCallback } from "react";

const API_KEY = import.meta.env.VITE_FISH_AUDIO_API_KEY as string;
const VOICE_ID = "98758d93b3ca47469e0d841b7b5ace9b";
const TTS_URL = "https://api.fish.audio/v1/tts";
const BATCH_SIZE = 5;

async function fetchTTSBlob(text: string): Promise<Blob> {
  const response = await fetch(TTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      model: "s2-pro",
    },
    body: JSON.stringify({
      text,
      reference_id: VOICE_ID,
      format: "mp3",
    }),
  });
  if (!response.ok) {
    throw new Error(`Fish Audio TTS failed: ${response.status}`);
  }
  return response.blob();
}

export function useFishAudioTTS(texts: string[]) {
  const cache = useRef<Map<string, Blob>>(new Map());
  const currentAudio = useRef<HTMLAudioElement | null>(null);

  // Preload all texts in batches on mount
  useEffect(() => {
    if (!API_KEY) return;

    let cancelled = false;

    const preload = async () => {
      for (let i = 0; i < texts.length; i += BATCH_SIZE) {
        if (cancelled) break;
        const batch = texts.slice(i, i + BATCH_SIZE);
        await Promise.all(
          batch.map(async (text) => {
            if (cache.current.has(text)) return;
            try {
              const blob = await fetchTTSBlob(text);
              if (!cancelled) cache.current.set(text, blob);
            } catch {
              // Silently fail — on-demand fetch will retry
            }
          })
        );
      }
    };

    preload();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopTTS = useCallback(() => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current = null;
    }
  }, []);

  const playTTS = useCallback((text: string) => {
    stopTTS();

    const play = (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.addEventListener("ended", () => URL.revokeObjectURL(url), { once: true });
      audio.play().catch(() => URL.revokeObjectURL(url));
      currentAudio.current = audio;
    };

    const cached = cache.current.get(text);
    if (cached) {
      play(cached);
    } else {
      // On-demand fetch if preload hasn't finished yet
      fetchTTSBlob(text)
        .then((blob) => {
          cache.current.set(text, blob);
          play(blob);
        })
        .catch(() => {});
    }
  }, [stopTTS]);

  return { playTTS, stopTTS };
}
