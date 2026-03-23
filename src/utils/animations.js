// Shared animation system — used across all components

// The signature ease curve — feels premium, not bouncy
export const EASE = [0.16, 1, 0.3, 1];
export const EASE_IN = [0.4, 0, 1, 1];
export const EASE_OUT = [0, 0, 0.2, 1];

// Fade up — the base reveal
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

// Fade in only
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  }),
};

// Slide in from left
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

// Slide in from right
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

// Scale up
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

// Stagger container
export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Line draw (for underlines / dividers)
export const lineDraw = (delay = 0) => ({
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: EASE, delay },
  },
});

// Card hover — consistent across all cards
export const cardHover = {
  rest: { y: 0, boxShadow: '0 2px 12px rgba(26,26,26,0.06)' },
  hover: {
    y: -8,
    boxShadow: '0 24px 48px rgba(26,26,26,0.14)',
    transition: { duration: 0.3, ease: EASE_OUT },
  },
};

// Viewport settings — trigger once, generous margin
export const viewport = { once: true, margin: '-80px' };
