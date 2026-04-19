import { useCallback, useLayoutEffect, useState } from 'react';
import { prepare, layout } from '@chenglou/pretext';

const MIN_FONT_SIZE = 12;
// Matches xl:text-7xl (4.5rem at 16px base) — the original design ceiling
const MAX_FONT_SIZE = 72;
const LINE_HEIGHT_RATIO = 1.25;

/**
 * Derives available text width/height from window dimensions, matching the
 * modal card layout: w-[90vw] max-w-6xl h-[80vh] p-8 md:p-16, with space
 * reserved for the absolute-positioned category badge and action button.
 */
function getCardTextArea() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // p-16 (64px each side) on md+, p-8 (32px each side) on small
  const padding = vw >= 768 ? 64 : 32;
  // Card: min(90vw, 1152px) × 80vh
  const cardW = Math.min(vw * 0.9, 1152);
  const cardH = vh * 0.8;
  // Subtract padding + ~120px for badge (top) and button (bottom) clearance
  return {
    width: Math.max(cardW - padding * 2, 80),
    height: Math.max(cardH - padding * 2 - 120, 60),
  };
}

/**
 * Binary-searches for the largest font size (px, up to 72) that fits `text`
 * within the modal question/answer card. Uses pretext for off-DOM measurement.
 *
 * @param text       - Raw text (uppercased internally to match CSS)
 * @param fontFamily - CSS font-family string, e.g. 'Oswald, sans-serif'
 */
export function useFitText(text: string, fontFamily: string): number {
  const [fontSize, setFontSize] = useState(MAX_FONT_SIZE);

  const fit = useCallback(() => {
    if (!text) return;

    const { width, height } = getCardTextArea();
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

  // Fire before paint to avoid a flash of the initial MAX_FONT_SIZE
  useLayoutEffect(() => {
    fit();
    // Re-run once web fonts are confirmed loaded for accurate canvas metrics
    document.fonts.ready.then(fit);
  }, [fit]);

  useLayoutEffect(() => {
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [fit]);

  return fontSize;
}
