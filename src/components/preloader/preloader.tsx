import { useEffect } from 'react';

function Preloader() {
    useEffect(() => {
      const preloader = document.querySelector("#preloader");
  
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add("loaded");
        }, 1000);
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      }
    }, []);
    return (
      <div id="preloader">
        <div className="line"></div>
      </div>
    );
  };

export default Preloader;
