export const slider = {
  hidden: { y: "0" },
  show: {
    y: "-100%",
    transition: { ease: "easeOut", duration: 1 },
  },
};
export const scaleFade = {
  hidden: { height: "65vh", width: "50%",
 opacity: 1,
},
  show: {
    height: "100vh",
    width: "64%",
    opacity: 1,
    transition: { duration: 1.25, ease: "easeOut" },
  },
};
