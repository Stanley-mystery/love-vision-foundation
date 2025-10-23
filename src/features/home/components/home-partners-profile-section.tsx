import Image1 from "@/assets/images/partner2.webp";
import Image2 from "@/assets/images/partner1.webp";
import HomePartnersProfileModal from "./home-partners-profile-modal";
const HomePartnersProfileSection = () => {
  return (
    <>
      <section id="team" className="team section light-background">
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span>Growth</span>
            <span className="description-title"> Partners</span>
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-member w-100">
                <div className="member-img position-relative">
                  <img
                    src={Image2}
                    className="img-fluid rounded-3 shadow-sm w-100"
                    alt="Tomilade Adebari"
                  />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center mt-3">
                  <h4>Tomilade Adebari</h4>
                  <span>Ophthalmologist</span>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    data-bs-toggle="modal"
                    data-bs-target="#tomiladeModal"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-member w-100">
                <div className="member-img position-relative">
                  <img
                    src={Image1}
                    className="img-fluid rounded-3 shadow-sm w-100"
                    alt="Olufunbi Adebari"
                  />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center mt-3">
                  <h4>Olufunbi Adebari</h4>
                  <span>Project Manager</span>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    data-bs-toggle="modal"
                    data-bs-target="#olufunbiModal"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomePartnersProfileModal />
    </>
  );
};
export default HomePartnersProfileSection;
