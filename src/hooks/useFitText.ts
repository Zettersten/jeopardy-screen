import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { prepare, layout } from '@chenglou/pretext';

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 100;
const LINE_HEIGHT_RATIO = 1.25;

/**
 * Binary-searches for the largest font size (px) that makes `text` fit within
 * the element attached via the returned `ref`. Uses pretext for off-DOM
 * measurement to avoid layout reflow.
 *
 * @param text       - Raw text (will be UPPERCASED internally to match CSS)
 * @param fontFamily - CSS font-family string, e.g. 'Oswald, sans-serif'
 */
export function useFitText(text: string, fontFamily: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(MAX_FONT_SIZE);

  const fit = useCallback(() => {
    const el = ref.current;
    if (!el || !text) return;

    const width = el.offsetWidth;
    const height = el.offsetHeight;
    if (width === 0 || height === 0) return;

    // Match CSS `text-transform: uppercase`
    const displayText = text.toUpperCase();

    let lo = MIN_FONT_SIZE;
    let hi = MAX_FONT_SIZE;
    let best = MIN_FONT_SIZE;

    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const prepared = prepare(displayText, `${mid}px ${fontFamily}`);
      const { height: textHeight } = layout(
        prepared,
        width,
        Math.ceil(mid * LINE_HEIGHT_RATIO)
      );

      if (textHeight <= height) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    setFontSize(best);
  }, [text, fontFamily]);

  // Run after every text/font change; re-run once web fonts are confirmed loaded
  useLayoutEffect(() => {
    fit();
    document.fonts.ready.then(fit);
  }, [fit]);

  // Re-run whenever the container is resized (window resize, orientation change)
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [fit]);

  return { ref, fontSize };
}
