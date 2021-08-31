export const fade = {
  hidden: { opacity: 0, },
  show: {
    opacity: 1,
    transition: { duration:.5, ease: "easeOut", when: "beforeChildren",
    staggerChildren: 0.25 },
  },
};
export const scaleFade = {
  hidden: { height: "65vh", width: "50%",
 opacity: 0,
},
  show: {
    height: "100vh",
    width: "64%",
    opacity: 1,
    transition: { duration: 1.25, ease: "easeOut" },
  },
};
export const titleAnim = {
  hidden: { y: 200 },
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

