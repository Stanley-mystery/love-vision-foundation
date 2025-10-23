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
                  click below to book an appointment with our partner or fill
                  out the contact form.
                </p>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a
                    href="https://eyefoundationhospital.com/"
                    target="_blank"
                    className="btn btn-outline-primary me-2"
                    aria-label="Book an Appointment"
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book an Appointment
                  </a>

                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Contact Us"
                  >
                    <i className="bi bi-telephone-plus-fill me-2"></i>
                    Contact Us
                  </button>
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
