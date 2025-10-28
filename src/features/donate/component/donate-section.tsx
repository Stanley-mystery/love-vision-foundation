import { useEffect } from "react";

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
            <h3 className="mb-3 text-white">Making Vision Accessible to All</h3>
            <p className="fst-italic mb-4 text-light">
              “Using our gifts and influence as a tool to uplift lives and
              communities.” — <strong>Love Vision Foundation</strong>
            </p>

            <ul className="ps-0">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle me-2 text-white"></i>
                <span>
                  Free eye tests, treatments, and surgeries for the less
                  privileged.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle me-2 text-white"></i>
                <span>Vision care education and outreach programs.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle me-2 text-white"></i>
                <span>
                  Support for families and communities affected by visual
                  impairment.
                </span>
              </li>
            </ul>

            <p className="mt-4 text-light">
              Whether it’s a one-time gift or a recurring contribution, your
              support changes lives. No amount is too small to make a
              difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatSection;
