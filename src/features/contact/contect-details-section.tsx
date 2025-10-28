import React, { useState } from "react";

const ContactDetailsSection: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "5fdf0fd2-4231-4bad-b0ba-6e21c18b329c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        form.reset(); // ✅ properly resets form
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("❌ Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      ></div>

      <div className="container form-container-overlap">
        <div
          className="row justify-content-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-lg-10">
            <div className="contact-form-wrapper">
              <h2 className="text-center text-white mb-4">
                We would like to connect with you.
              </h2>

              <form className="form" onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-person"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          placeholder="Name"
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
                          name="Email"
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
                          name="Subject"
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
                          name="Message"
                          placeholder="Write Message..."
                          style={{ height: "180px" }}
                          required
                        ></textarea>
                      </div>
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

                  {result && (
                    <div className="col-12 text-center mt-3">
                      <p className="text-white">{result}</p>
                    </div>
                  )}
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
