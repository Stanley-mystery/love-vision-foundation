import { useEffect } from "react";
import ImpactReport2 from "@/assets/reports/impact-report2.pdf";
import homeAbout1 from "@/assets/images/homeAbout1.jpg";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

const DonatSection = () => {
  useEffect(() => {
    // Check if PayPal SDK is already loaded
    if (window.paypal?.HostedButtons) {
      window.paypal
        .HostedButtons({ hostedButtonId: "D23CSCSWX4NDW" })
        .render("#paypal-container-D23CSCSWX4NDW");
      return;
    }

    // Otherwise, dynamically load it
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAM_AnZkn2z0cTfViY5KhkkIo9qmGQZ27DWI70m8sQHAHKipmV5niyqvge9ptRu-F4d92b6EftUC2FOC0&components=hosted-buttons&enable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = () => {
      if (window.paypal?.HostedButtons) {
        window.paypal
          .HostedButtons({ hostedButtonId: "D23CSCSWX4NDW" })
          .render("#paypal-container-D23CSCSWX4NDW");
      }
    };
    document.body.appendChild(script);
  }, []);
  return (
    <section id="about-us" className="section about-us py-5">
      <div className="container">
        <div
          className="row gy-5 border rounded-4 shadow-lg p-4 align-items-center"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-color) 0%, #4c6ef5 100%)",
            color: "white",
          }}
          data-aos="fade-up"
        >
          {/* Payment Card */}
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="paypal-card h-100"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                color: "#fff",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.25)";
              }}
            >
              <h4 className="fw-semibold mb-3 text-white">
                Support the Cause 💙
              </h4>
              <p
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}
              >
                Your donations go directly toward providing free eye care,
                surgeries, and educational programs for underserved communities.
              </p>

              <div
                id="paypal-container-D23CSCSWX4NDW"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginTop: "1.5rem",
                }}
              ></div>

              <small
                className="d-block mt-3 text-light"
                style={{ opacity: 0.7 }}
              >
                Your transaction is secure and encrypted.
              </small>
            </div>
          </div>

          {/* Content */}
          <div
            className="col-lg-6 order-2 order-lg-1 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="department-card">
              <div className="department-image">
                <img
                  src={homeAbout1}
                  alt="August 2025 Impact Report"
                  className="img-fluid"
                />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>August 2025 Impact Report</h3>
                <p className="text-dark">
                  Take a look at the incredible milestones achieved in August
                  2025 — from restored vision to renewed hope, made possible
                  through your continued support and our shared mission to serve
                  with love.
                </p>
                <a href={ImpactReport2} download className="btn-learn-more">
                  <span>Download Report</span>
                  <i className="fas fa-download ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatSection;
