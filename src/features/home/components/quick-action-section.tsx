const QuickActionSection = () => {
  return (
    <section
      id="call-to-action"
      className="call-to-action section light-background"
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="benefits-showcase"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="benefits-grid">
            <div
              className="benefit-card"
              data-aos="flip-left"
              data-aos-delay="500"
            >
              <div className="benefit-visual">
                <div className="benefit-icon-wrap">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <div className="benefit-pattern"></div>
              </div>

              <div className="benefit-content d-flex flex-column align-items-center">
                <h4>Need Cataract or Glaucoma Surgery?</h4>
                <p>
                  If you know anyone who needs cataract or glaucoma surgery,
                  click below to fill out the contact form.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a
                    href="/contact"
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Contact Us"
                  >
                    <i className="bi bi-telephone-plus-fill me-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActionSection;
