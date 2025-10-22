const HomeImpacts = () => {
  return (
    <section id="hero-features" className="hero-features section">
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <h2>Impact</h2>
        <p>
          <span>Other Impact</span>{" "}
          <span className="description-title">Areas</span>
        </p>
      </div>
      <div className="hero-features">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className="col-lg-3 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-item">
                <div className="icon">
                  <i className="bi bi-globe-europe-africa"></i>
                </div>
                <h4>Supporting Global Missions</h4>
                <p>
                  Funding missionaries to reach different parts of the world
                  with the gospel.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature-item">
                <div className="icon">
                  <i className="bi bi-award"></i>
                </div>
                <h4>Empowering Education</h4>
                <p>
                  Paying tuition for children in various schools to help them
                  access quality education and a brighter future.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-item">
                <div className="icon">
                  <i className="bi bi-people"></i>
                </div>
                <h4>Caring for Orphans</h4>
                <p>
                  Donating to children’s homes and supporting their welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeImpacts;
