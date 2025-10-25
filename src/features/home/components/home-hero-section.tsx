import HeroBg1 from "@/assets/images/home1.jpeg";
import HeroBg2 from "@/assets/images/home2.jpeg";
import HeroBg3 from "@/assets/images/home3.jpeg";

const HomeHeroSection = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-item active">
          <img src={HeroBg1} alt="" />
          <div className="carousel-container">
            <h2>
              A clear mandate: to be a channel of blessing and restoration to
              individuals facing vision challenges.
              <br />
            </h2>
            <p>
              Using our gifts and influence as a tool to uplift lives and
              communities through dedication to ensuring the foundation fulfills
              its God-given mandate of restoring sight, bringing hope, and
              transforming lives through practical support and the love of
              Christ.
            </p>
            <a
              href="#featured-services"
              className="btn-get-started d-flex  align-items-center gap-2"
            >
              <i className="bi bi-heart-fill"></i>
              Donate
            </a>
          </div>
        </div>
        {/* End Carousel Item */}

        <div className="carousel-item">
          <img src={HeroBg2} alt="" />
          <div className="carousel-container">
            <h2>
              A clear mandate: to be a channel of blessing and restoration to
              individuals facing vision challenges.
              <br />
            </h2>
            <p>
              Using our gifts and influence as a tool to uplift lives and
              communities through dedication to ensuring the foundation fulfills
              its God-given mandate of restoring sight, bringing hope, and
              transforming lives through practical support and the love of
              Christ.
            </p>
            <a
              href="#featured-services"
              className="btn-get-started d-flex  align-items-center gap-2"
            >
              <i className="bi bi-heart-fill"></i>
              Donate
            </a>
          </div>
        </div>
        {/* End Carousel Item */}

        <div className="carousel-item">
          <img src={HeroBg3} alt="" />
          <div className="carousel-container">
            <h2>
              A clear mandate: to be a channel of blessing and restoration to
              individuals facing vision challenges.
              <br />
            </h2>
            <p>
              Using our gifts and influence as a tool to uplift lives and
              communities through dedication to ensuring the foundation fulfills
              its God-given mandate of restoring sight, bringing hope, and
              transforming lives through practical support and the love of
              Christ.
            </p>
            <a
              href="#featured-services"
              className="btn-get-started d-flex  align-items-center gap-2"
            >
              <i className="bi bi-heart-fill"></i>
              Donate
            </a>
          </div>
        </div>
        {/* End Carousel Item */}

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>

        <ol className="carousel-indicators">
          <li
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></li>
          <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
        </ol>
      </div>
    </section>
  );
};

export default HomeHeroSection;
