import homeAbout1 from "@/assets/images/homeAbout1.jpg";
// import homeAbout2 from "@/assets/images/homeAbout2.jpg";
// import ImpactReport1 from "@/assets/reports/impact-report1.pdf";
import ImpactReport2 from "@/assets/reports/impact-report2.pdf";

const ReportsDetailsSection = () => {
  return (
    <section id="featured-departments" className="featured-departments section">
      {/* Section Title */}
      <div
        className="container section-title aos-init aos-animate px-12"
        data-aos="fade-up"
      >
        <h2>Impact Reports</h2>
        <p className="text-wrap">
          Guided by our God-given mandate — <br />
          to be a channel of blessing and restoration to individuals facing
          vision challenges. <br />
          Through compassion, dedication, and the love of Christ, we are
          restoring sight, bringing hope, <br />
          and transforming lives across communities.
        </p>
      </div>
      {/* End Section Title */}

      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4 justify-content-center">
          {/* August 2025 Report */}
          <div
            className="col-lg-4 col-md-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
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
                <p>
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

export default ReportsDetailsSection;
