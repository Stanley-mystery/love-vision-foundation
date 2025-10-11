import HeroBg from "@/assets/images/love-house-group-herobg.jpg";

const HomeHeroSection = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container-fluid p-0">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img
              src={HeroBg}
              alt="LoveHouse Foundation"
              className="img-fluid"
            />
          </div>

          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-7 col-md-10 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="content-box">
                    <span
                      className="badge-accent aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="150"
                    >
                      Restoring Sight. Bringing Hope.
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="aos-init aos-animate"
                    >
                      A Channel of Blessing and Restoration
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="250"
                      className="aos-init aos-animate"
                    >
                      A clear mandate: to be a channel of blessing and
                      restoration to individuals facing vision challenges. Using
                      our gifts and influence as a tool to uplift lives and
                      communities through dedication to ensuring the foundation
                      fulfills its God-given mandate of restoring sight,
                      bringing hope, and transforming lives through practical
                      support and the love of Christ.
                    </p>

                    <div
                      className="cta-group aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <a href="#about" className="btn btn-primary">
                        Learn More About Our Mission
                      </a>
                      <a href="#" className="btn btn-outline">
                        Support the Cause
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="features-wrapper">
                <div className="row gy-4">
                  <div className="col-lg-4">
                    <div
                      className="feature-item aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="450"
                    >
                      <div className="feature-icon">
                        <i className="bi bi-eye-fill"></i>
                      </div>
                      <div className="feature-text">
                        <h3>Restoring Sight</h3>
                        <p>
                          Providing access to quality eye care and treatment for
                          those in need.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="feature-item aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="feature-icon">
                        <i className="bi bi-heart-fill"></i>
                      </div>
                      <div className="feature-text">
                        <h3>Bringing Hope</h3>
                        <p>
                          Sharing the love of Christ through compassion and
                          community impact programs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="feature-item aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="550"
                    >
                      <div className="feature-icon">
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <div className="feature-text">
                        <h3>Transforming Lives</h3>
                        <p>
                          Empowering individuals and families to live with
                          dignity, faith, and restored vision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
