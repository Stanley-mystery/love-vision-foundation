import Image1 from "@/assets/images/love-vision-image.png";

const HomeMainAboutSection = () => {
  return (
    <section id="about" className="about section light-background">
      {/* Section Title */}
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <h2>Who We Are</h2>
        <p>
          <span>Find Out More</span>{" "}
          <span className="description-title">
            About Love Vision Foundation
          </span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-3">
          <div
            className="col-lg-6 aos-init aos-animate p-0 rounded"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="w-100 h-100 bg-image"
              style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100%",
                borderRadius: "12px",
              }}
            ></div>
          </div>

          <div
            className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="about-content ps-0 ps-lg-3">
              {/* <h3>About Love Vision Foundation</h3> */}
              <p className="fst-italic">
                Love Vision Foundation was birthed in 2021 as a divine platform
                through which God desired to reach His people. From the
                beginning, we have carried a clear mandate: to be a channel of
                blessing and restoration to individuals facing vision
                challenges.
              </p>

              <p>
                God placed it in our hearts to serve those suffering from eye
                conditions such as cataracts, glaucoma, and other forms of
                visual impairment. Our mission is not only to bring physical
                relief but also to extend God’s love and hope to those in need.
              </p>

              <p>
                In 2023, Love Vision Foundation was officially registered,
                marking a significant milestone in fulfilling the vision God
                entrusted to us. Since then, we have continued to grow as a
                vessel of compassion, support, and healing for communities.
              </p>

              <p>
                At Love Vision Foundation, we believe that restoring sight goes
                beyond physical healing—it is about transforming lives,
                restoring dignity, and helping people see the future God has
                planned for them.
              </p>

              <ul className="mt-4">
                <li>
                  <i className="bi bi-lightbulb"></i>
                  <div>
                    <h4>Our Belief</h4>
                    <p>
                      We uphold the belief that our God-given gifts and
                      influence should be used to restore sight, bring hope, and
                      uplift lives through the love and acceptance of Christ His
                      Son.
                    </p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-bullseye"></i>
                  <div>
                    <h4>Our Mission</h4>
                    <p>
                      Our mission is to transform lives and strengthen
                      communities by providing sustainable, practical support
                      that addresses vision needs and promotes human dignity.
                    </p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-hand-thumbs-up"></i>
                  <div>
                    <h4>Our Mandate</h4>
                    <p>
                      With unwavering dedication, we have restored sight,
                      provided hope, and improved quality of life for
                      individuals and communities, fulfilling our mandate of
                      service and compassion.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-3">
                Through our outreach programs, free cataract and glaucoma
                surgeries, and faith-driven service, we continue to bring light
                where there is darkness—sharing the love of Christ by restoring
                sight and transforming lives one person at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMainAboutSection;
