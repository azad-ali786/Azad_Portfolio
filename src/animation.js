export const fade = {
  hidden: { opacity: 0, },
  show: {
    opacity: 1,
    transition: { duration:.5, ease: "easeOut", when: "beforeChildren",
    staggerChildren: 0.25 },
  },
};
export const titleAnim = {
  hidden: { y: 250 },
  show: {
    y: 0,
    transition: {duration: 0.35, ease: "easeOut" },
  },
};
export const lineAnim = {
  hidden: { width: "0%"},
  show: {
    width: "30%",
    transition: {duration: 0.35, ease: "easeOut" },
  },
};
export const imgAnim = {
  hidden: { width: "0%"},
  show: {
    width: "50vw",
    transition: {duration: 0.35, ease: "easeOut" },
  },
};
export const imgAnim1 = {
  hidden: { width: "0%"},
  show: {
    width: "50vw",
    transition: {delay: 0.15,duration: 0.35, ease: "easeOut" },
  },
};
export const imgAnim2 = {
  hidden: { width: "0%"},
  show: {
    width: "50vw",
    transition: {delay:0.25,duration: 0.35, ease: "easeOut" },
  },
};

