import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollTop = document.querySelector(".scroll-top");

    const toggleScrollTop = () => {
      if (scrollTop) {
        if (window.scrollY > 100) {
          scrollTop.classList.add("active");
        } else {
          scrollTop.classList.remove("active");
        }
      }
    };

    const handleClick = (e: Event) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (scrollTop) {
      scrollTop.addEventListener("click", handleClick);
    }

    document.addEventListener("scroll", toggleScrollTop);
  }, []);

  return (
    <a
      href="#"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollToTop;
