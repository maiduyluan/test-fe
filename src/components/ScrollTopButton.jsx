import React from "react";
import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollTopButton = () => {
  const [isScrollTopButton, setIsScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? setIsScrollTopButton(true)
        : setIsScrollTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isScrollTopButton && (
        <button
          className="fixed bottom-[20px] right-[20px] text-4xl"
          onClick={() => scrollUp()}
        >
          <FaCircleArrowUp className="text-gray-500"/>
        </button>
      )}
    </div>
  );
};

export default ScrollTopButton;
