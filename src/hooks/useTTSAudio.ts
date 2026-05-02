import { useRef, useCallback } from "react";

const BASE = import.meta.env.BASE_URL;

export function useTTSAudio() {
  const currentAudio = useRef<HTMLAudioElement | null>(null);

  const stopTTS = useCallback(() => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current = null;
    }
  }, []);

  const playTTS = useCallback(
    (type: "question" | "answer", catIdx: number, qIdx: number) => {
      stopTTS();
      const audio = new Audio(`${BASE}audio/tts/${type}-${catIdx}-${qIdx}.mp3`);
      audio.play().catch(() => {});
      currentAudio.current = audio;
    },
    [stopTTS]
  );

  return { playTTS, stopTTS };
}
