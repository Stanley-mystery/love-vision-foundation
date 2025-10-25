const DonatSection = () => {
  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <div
          className="row gy-4 border shadow rounded p-4"
          style={{ backgroundColor: "var(--accent-color)", color: "white" }}
        >
          <div
            className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div id="paypal-container-D23CSCSWX4NDW"></div>
          </div>

          <div
            className="col-lg-6 order-2 order-lg-1 content aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-white">Making Vision Accessible to All</h3>
            <p className="fst-italic">
              “Using our gifts and influence as a tool to uplift lives and
              communities.” — Love Vision Foundation
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle text-white"></i>{" "}
                <span>
                  Free eye tests, treatments, and surgeries for the less
                  privileged.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle text-white"></i>{" "}
                <span>Vision care education and outreach programs.</span>
              </li>
              <li>
                <i className="bi bi-check-circle text-white"></i>{" "}
                <span>
                  Support for families and communities affected by visual
                  impairment.
                </span>
              </li>
            </ul>
            <p className="mt-3">
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
