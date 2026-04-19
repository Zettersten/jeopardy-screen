import { useState, useEffect, useRef, useCallback } from "react";

const BASE = import.meta.env.BASE_URL;
const AUDIO_PATHS = {
  intro: `${BASE}audio/intro.mp3`,
  background: `${BASE}audio/background.mp3`,
  question: `${BASE}audio/question.mp3`,
  reveal: `${BASE}audio/reveal.mp3`,
} as const;

function createAudio(src: string, loop = false): HTMLAudioElement {
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.loop = loop;
  return audio;
}

function safePlay(audio: HTMLAudioElement): void {
  audio.currentTime = 0;
  audio.play().catch(() => {
    // Blocked by browser autoplay policy — silently ignore.
  });
}

export function useGameAudio() {
  const introRef = useRef<HTMLAudioElement | null>(null);
  const backgroundRef = useRef<HTMLAudioElement | null>(null);
  const questionRef = useRef<HTMLAudioElement | null>(null);
  const revealRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    const intro = createAudio(AUDIO_PATHS.intro);
    const background = createAudio(AUDIO_PATHS.background, true);
    background.volume = 0.2;
    const question = createAudio(AUDIO_PATHS.question);
    const reveal = createAudio(AUDIO_PATHS.reveal);

    introRef.current = intro;
    backgroundRef.current = background;
    questionRef.current = question;
    revealRef.current = reveal;

    const tracks = [intro, background, question, reveal];
    let loadedCount = 0;
    const onLoaded = () => {
      loadedCount++;
      if (loadedCount === tracks.length) setAudioReady(true);
    };
    tracks.forEach((audio) => {
      if (audio.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
        onLoaded();
      } else {
        audio.addEventListener("canplaythrough", onLoaded, { once: true });
      }
    });

    const onIntroEnded = () => {
      background.currentTime = 0;
      background.play().catch(() => {});
    };
    intro.addEventListener("ended", onIntroEnded);

    return () => {
      intro.removeEventListener("ended", onIntroEnded);
      tracks.forEach((a) => a.pause());
    };
  }, []);

  const startAudio = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (introRef.current) safePlay(introRef.current);
  }, []);

  const playQuestion = useCallback(() => {
    if (!startedRef.current || !questionRef.current) return;
    safePlay(questionRef.current);
  }, []);

  const playReveal = useCallback(() => {
    if (!startedRef.current || !revealRef.current) return;
    safePlay(revealRef.current);
  }, []);

  return { startAudio, playQuestion, playReveal, audioReady };
}
