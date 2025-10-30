import ImageTomilade from "@/assets/images/partner1.webp";
import ImageOlufunbi from "@/assets/images/partner2.webp";

const HomePartnersProfileModal = () => {
  return (
    <>
      {/* Tomilade Modal */}
      <div
        className="modal fade"
        id="tomiladeModal"
        tabIndex={-1}
        aria-labelledby="tomiladeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 bg-primary text-white rounded-top">
              <h4
                className="modal-title fw-semibold text-white"
                id="tomiladeModalLabel"
              >
                Tomilade Adebari
              </h4>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <img
                  src={ImageTomilade}
                  className="rounded-circle shadow-sm mb-3"
                  width="130"
                  alt="Tomilade Adebari"
                />
                <h5 className="fw-bold mb-0">
                  Comprehensive Ophthalmologist &amp; Glaucoma Specialist
                </h5>
              </div>

              <div className="partner-bio">
                <p>
                  Tomilade Adebari is an enthusiastic child of God with a heart
                  to spread the gospel of Jesus Christ through various means.
                  She began her ministry journey as a teenager, serving
                  faithfully in prayer and intercession. With a deep passion for
                  praying the Word of God, she believes in the power of prayer
                  to transform lives and nations.
                </p>
                <p>
                  Over the years, Tomilade has also served in youth ministry
                  and, together with her husband, ministers to marriages with a
                  desire to see families strengthened in Christ.
                </p>
                <p>
                  Beyond ministry, Tomilade is a board-certified Comprehensive
                  Ophthalmologist and Glaucoma Specialist. Her medical expertise
                  reflects her commitment to restoring sight both physically and
                  spiritually.
                </p>
                <p>
                  Together with her husband, Olufunbi, Tomilade co-founded Love
                  Vision Foundation, a non-profit organization dedicated to
                  providing financial support for global missions and offering
                  care for individuals with vision challenges. She is joyfully
                  married to Olufunbi, and they are blessed with three beautiful
                  children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Olufunbi Modal */}
      <div
        className="modal fade"
        id="olufunbiModal"
        tabIndex={-1}
        aria-labelledby="olufunbiModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 bg-primary text-white rounded-top">
              <h4
                className="modal-title fw-semibold text-white"
                id="olufunbiModalLabel"
              >
                Olufunbi Adebari
              </h4>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <img
                  src={ImageOlufunbi}
                  className="rounded-circle shadow-sm mb-3"
                  width="130"
                  alt="Olufunbi Adebari"
                />
                <h5 className="fw-bold mb-0">
                  Programme Manager &amp; Technology Expert
                </h5>
              </div>

              <div className="partner-bio">
                <p>
                  Olufunbi Adebari is a seasoned technology expert with a wealth
                  of experience in project management delivery across diverse
                  sectors. He has consistently applied his skills to drive
                  excellence, innovation, and measurable results in every
                  environment he serves.
                </p>
                <p>
                  His professional background reflects a commitment to quality
                  and a vision for creating lasting impact.
                </p>
                <p>
                  Beyond his expertise in technology and project management,
                  Olufunbi has a genuine passion for missions and service. His
                  heart is to serve both God and people, using his gifts and
                  influence as a tool to uplift lives and communities. He
                  believes strongly in aligning professional excellence with
                  Kingdom purpose.
                </p>
                <p>
                  As one of the founding voices behind Love Vision Foundation,
                  Olufunbi combines his leadership skills with faith-driven
                  compassion. He is dedicated to ensuring the foundation
                  fulfills its God-given mandate of restoring sight, bringing
                  hope, and transforming lives through practical support and the
                  love of Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePartnersProfileModal;
