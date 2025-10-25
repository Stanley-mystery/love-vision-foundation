const ContactDetailsSection = () => {
  return (
    <section id="contact" className="contact section">
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
      <div className="container form-container-overlap">
        <div
          className="row justify-content-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-lg-10">
            <div className="contact-form-wrapper">
              <h2 className="text-center text-white mb-4">
                We will like to connect with you.
              </h2>

              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-person"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-envelope"></i>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-text-left"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-chat-dots message-icon"></i>
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Write Message..."
                          style={{ height: "180px" }}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactDetailsSection;
