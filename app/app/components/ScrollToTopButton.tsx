import {useMemo, useState} from "react";

const ArrowUpSVG = () => {
  return (
    <svg
      // xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 350"
      style={{
        width: "25px",
        height: "25px",
        fill: "white",
        fontWeight: "bold",
      }}
    >
      <path
        // xmlns="http://www.w3.org/2000/svg"
        id="arrow-up"
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      ></path>
    </svg>
  );

}

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useMemo(() => {
    const window = globalThis.window;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const viewportHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 2;
        setIsButtonVisible(scrollY > viewportHeight);
      });
    } else {
      setIsButtonVisible(false);
    }
  }, [globalThis]);

  return (
    <button
      className="scroll-to-top-button"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "125px",
        right: "0px",
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        border: "none",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        display: isButtonVisible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ArrowUpSVG />
    </button>
  );
};

export default ScrollToTopButton;
