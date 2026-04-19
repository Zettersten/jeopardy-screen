import { useEffect, useRef, useCallback } from "react";

const AUDIO_PATHS = {
  intro: "/audio/intro.mp3",
  background: "/audio/background.mp3",
  question: "/audio/question.mp3",
  reveal: "/audio/reveal.mp3",
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

  useEffect(() => {
    introRef.current = createAudio(AUDIO_PATHS.intro);
    backgroundRef.current = createAudio(AUDIO_PATHS.background, true);
    questionRef.current = createAudio(AUDIO_PATHS.question);
    revealRef.current = createAudio(AUDIO_PATHS.reveal);

    const intro = introRef.current;
    const background = backgroundRef.current;

    const onIntroEnded = () => {
      background.currentTime = 0;
      background.play().catch(() => {});
    };
    intro.addEventListener("ended", onIntroEnded);

    return () => {
      intro.removeEventListener("ended", onIntroEnded);
      intro.pause();
      background.pause();
      questionRef.current?.pause();
      revealRef.current?.pause();
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

  return { startAudio, playQuestion, playReveal };
}
