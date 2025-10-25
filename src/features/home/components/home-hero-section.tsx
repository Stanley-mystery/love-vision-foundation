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
              Welcome to Sailor
              <br />
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
            <h2>At vero eos et accusamus</h2>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut.
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
            <h2>Temporibus autem quibusdam</h2>
            <p>
              Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste
              natus error sit voluptatem accusantium.
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
