import { useEffect, useState } from "react";
import "./Scroll.css";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function handleScroll() {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    setScrollPercentage(scrolled);
  }
  useEffect(() => window.addEventListener("scroll", handleScroll), []);
  return (
    <div className="scroll-indicator-container">
      <span
        className="scroll-bar"
        style={{ width: `${scrollPercentage}%` }}
      ></span>
    </div>
  );
};

export default ScrollIndicator;
