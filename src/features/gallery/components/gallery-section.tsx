import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";

// Import 22 images
import GalleryImage1 from "@/assets/images/gallery/gallery1.jpg";
import GalleryImage2 from "@/assets/images/gallery/gallery2.jpg";
import GalleryImage3 from "@/assets/images/gallery/gallery3.jpg";
import GalleryImage4 from "@/assets/images/gallery/gallery4.jpg";
import GalleryImage5 from "@/assets/images/gallery/gallery5.jpg";
import GalleryImage6 from "@/assets/images/gallery/gallery6.jpg";
import GalleryImage7 from "@/assets/images/gallery/gallery7.jpg";
import GalleryImage8 from "@/assets/images/gallery/gallery8.jpg";
import GalleryImage9 from "@/assets/images/gallery/gallery9.jpg";
import GalleryImage10 from "@/assets/images/gallery/gallery10.jpg";
import GalleryImage11 from "@/assets/images/gallery/gallery11.jpg";
import GalleryImage12 from "@/assets/images/gallery/gallery12.jpg";
import GalleryImage13 from "@/assets/images/gallery/gallery13.jpg";
import GalleryImage14 from "@/assets/images/gallery/gallery14.jpg";
import GalleryImage15 from "@/assets/images/gallery/gallery15.jpg";
import GalleryImage16 from "@/assets/images/gallery/gallery16.jpg";
import GalleryImage17 from "@/assets/images/gallery/gallery17.jpg";
import GalleryImage18 from "@/assets/images/gallery/gallery18.jpg";
import GalleryImage19 from "@/assets/images/gallery/gallery19.jpg";
import GalleryImage20 from "@/assets/images/gallery/gallery20.jpg";
import GalleryImage21 from "@/assets/images/gallery/gallery21.jpg";
import GalleryImage22 from "@/assets/images/gallery/gallery22.jpg";

const GallerySection: React.FC = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    const galleryGrid = document.querySelector(".gallery-grid");
    if (galleryGrid) {
      const iso = new Isotope(galleryGrid, {
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
      });

      const filters = document.querySelectorAll(".gallery-filters li");
      filters.forEach((filter) => {
        filter.addEventListener("click", (e) => {
          filters.forEach((el) => el.classList.remove("filter-active"));
          const target = e.currentTarget as HTMLElement;
          target.classList.add("filter-active");
          const filterValue = target.getAttribute("data-filter");
          iso.arrange({ filter: filterValue ?? "" });
        });
      });
    }

    return () => {
      lightbox.destroy();
    };
  }, []);

  const childrenImages = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
    GalleryImage11,
  ];

  const adultImages = [
    GalleryImage12,
    GalleryImage13,
    GalleryImage14,
    GalleryImage15,
    GalleryImage16,
    GalleryImage17,
    GalleryImage18,
    GalleryImage19,
    GalleryImage20,
    GalleryImage21,
    GalleryImage22,
  ];

  const renderGalleryItems = (images: string[], category: string) =>
    images.map((img, index) => (
      <div
        key={`${category}-${index}`}
        className={`col-xl-4 col-md-6 gallery-item isotope-item filter-${category} mb-4`}
      >
        <a
          href={img}
          className="glightbox d-block position-relative overflow-hidden rounded-3"
        >
          <img
            src={img}
            alt={`${category} ${index + 1}`}
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "300px" }}
          />
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
    ));

  return (
    <section id="gallery" className="gallery section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Filter Tabs */}
        <ul
          className="gallery-filters isotope-filters d-flex justify-content-center list-unstyled mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* <li
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
          </li> */}
        </ul>

        {/* Gallery Grid */}
        <div
          className="row gallery-grid isotope-container"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {renderGalleryItems(childrenImages, "children")}
          {renderGalleryItems(adultImages, "adults")}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
