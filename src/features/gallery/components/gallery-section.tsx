import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";

// Import your images
import GalleryImage1 from "@/assets/images/galleryImage1.jpeg";
import GalleryImage2 from "@/assets/images/galleryImage2.jpeg";
import GalleryImage3 from "@/assets/images/galleryImage3.jpeg";

const GallerySection: React.FC = () => {
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    // Initialize Isotope filtering
    const galleryGrid = document.querySelector(".gallery-grid");
    if (galleryGrid) {
      const iso = new Isotope(galleryGrid, {
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
      });

      const filters = document.querySelectorAll(".gallery-filters li");
      filters.forEach((filter) => {
        filter.addEventListener("click", function () {
          filters.forEach((el) => el.classList.remove("filter-active"));
          this.classList.add("filter-active");
          const filterValue = this.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });
    }

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="gallery section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Tabs */}
        <ul
          className="gallery-filters isotope-filters d-flex justify-content-center list-unstyled mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <li
            data-filter="*"
            className="filter-active mx-3 px-3 py-2 rounded-pill"
            style={{ cursor: "pointer" }}
          >
            All
          </li>
          <li
            data-filter=".filter-children"
            className="mx-3 px-3 py-2 rounded-pill"
            style={{ cursor: "pointer" }}
          >
            Children
          </li>
          <li
            data-filter=".filter-adults"
            className="mx-3 px-3 py-2 rounded-pill"
            style={{ cursor: "pointer" }}
          >
            Adults
          </li>
        </ul>

        {/* Gallery Grid */}
        <div
          className="row gallery-grid isotope-container"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Children */}
          {[GalleryImage1, GalleryImage2, GalleryImage3].map((img, index) => (
            <div
              key={`child-${index}`}
              className="col-xl-4 col-md-6 gallery-item isotope-item filter-children mb-4"
            >
              <a
                href={img}
                className="glightbox d-block position-relative overflow-hidden rounded-3"
              >
                <img
                  src={img}
                  alt={`Children ${index + 1}`}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                {/* Glass overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                ></div>
              </a>
            </div>
          ))}

          {/* Adults */}
          {[GalleryImage2, GalleryImage3, GalleryImage1].map((img, index) => (
            <div
              key={`adult-${index}`}
              className="col-xl-4 col-md-6 gallery-item isotope-item filter-adults mb-4"
            >
              <a
                href={img}
                className="glightbox d-block position-relative overflow-hidden rounded-3"
              >
                <img
                  src={img}
                  alt={`Adults ${index + 1}`}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                {/* Glass overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                ></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
