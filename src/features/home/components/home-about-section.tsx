import Image1 from "@/assets/images/homeAbout1.jpg";
import Image2 from "@/assets/images/homeAbout2.jpg";
import Image3 from "@/assets/images/homeAbout3.jpg";
const HomeAboutSection = () => {
  return (
    <section id="home-about" className="home-about section">
      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row">
          <div
            className="col-lg-8 mx-auto text-center mb-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h2 className="section-heading">
              Committed to Offering the Best in Vision Health
            </h2>
            <p className="lead-description">
              Give the Gift of Sight – Free Cataract & Glaucoma Surgeries. Your
              generosity helps restore vision, renew hope, and transform lives.
              Every contribution, no matter the size, supports vital treatments,
              practical assistance, and community outreach for individuals
              facing vision challenges. <br />
              <br />
              Together, we can bring light back into someone’s world.
            </p>
          </div>
        </div>

        <div className="row align-items-center gy-5">
          <div
            className="col-lg-7 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="image-grid">
              <div className="primary-image">
                <img
                  src={Image1}
                  alt="Eye care outreach"
                  className="img-fluid"
                />
                <div className="certification-badge">
                  <i className="bi bi-eye-fill"></i>
                  <span>Restoring Sight</span>
                </div>
              </div>
              <div className="secondary-images">
                <div className="small-image">
                  <img
                    src={Image2}
                    alt="Vision screening program"
                    className="img-fluid"
                  />
                </div>
                <div className="small-image">
                  <img
                    src={Image3}
                    alt="Free surgery initiative"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="content-wrapper">
              <div className="highlight-box">
                <div className="highlight-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <div className="highlight-content">
                  <h4>Compassion in Action</h4>
                  <p>
                    Every outreach, surgery, and donation is an expression of
                    love — restoring hope and sight through the power of care
                    and faith.
                  </p>
                </div>
              </div>

              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    Free cataract and glaucoma surgeries for the underserved
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    Community-based vision screening and education
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    Partnerships with medical professionals and hospitals
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="feature-text">
                    Faith-driven commitment to restoring lives through sight
                  </div>
                </div>
              </div>

              <div className="metrics-row">
                <div className="metric-box">
                  <div className="metric-number">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="100"
                      data-purecounter-duration="0"
                    >
                      100
                    </span>
                    %
                  </div>
                  <div className="metric-label">Hope Restored</div>
                </div>
                <div className="metric-box">
                  <div className="metric-number">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="35"
                      data-purecounter-duration="0"
                    >
                      35
                    </span>
                    K+
                  </div>
                  <div className="metric-label">Sight Restored</div>
                </div>
              </div>

              <div className="action-buttons">
                <a href="#" className="btn-explore">
                  Learn More
                </a>
                <a href="#" className="btn-contact">
                  <i className="bi bi-heart"></i>
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
