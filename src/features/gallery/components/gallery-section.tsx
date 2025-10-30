import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";

// Import 22 images
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

interface GallerySectionProps {
  limit?: number;
  showViewMore?: boolean;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  limit,
  showViewMore,
}) => {
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    // Initialize Isotope after images load
    const galleryGrid = document.querySelector(".gallery-grid");
    let iso: Isotope | null = null;

    const initIsotope = () => {
      if (galleryGrid) {
        iso = new Isotope(galleryGrid, {
          itemSelector: ".gallery-item",
          layoutMode: "masonry",
        });
      }
    };

    // Wait until all images have loaded before initializing Isotope
    const images = galleryGrid?.querySelectorAll("img");
    if (images && images.length > 0) {
      let loadedCount = 0;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) initIsotope();
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener("load", checkAllLoaded);
          img.addEventListener("error", checkAllLoaded);
        }
      });
    } else {
      initIsotope();
    }

    // Cleanup on unmount
    return () => {
      try {
        lightbox.destroy();
      } catch (err) {
        console.warn("GLightbox cleanup skipped:", err);
      }

      try {
        if (iso) (iso as any).destroy();
      } catch (err) {
        console.warn("Isotope cleanup skipped:", err);
      }
    };
  }, [limit, showViewMore]);

  // Grouped images
  const allImages = [
    ...[
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
    ].map((img) => ({ src: img, category: "children" })),
    ...[
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
    ].map((img) => ({ src: img, category: "adults" })),
  ];

  const displayedImages = limit ? allImages.slice(0, limit) : allImages;

  const renderGalleryItems = () =>
    displayedImages.map((item, index) => (
      <div
        key={`${item.category}-${index}`}
        className={`col-xl-4 col-md-6 gallery-item isotope-item filter-${item.category} mb-4`}
      >
        <a
          href={item.src}
          className="glightbox d-block position-relative overflow-hidden rounded-3"
        >
          <img
            src={item.src}
            alt={`${item.category} ${index + 1}`}
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
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        {/* <h2>Our Partners</h2> */}
        <p>
          <span>Feel Our</span>{" "}
          <span className="description-title">Impact</span>
        </p>
        <span>
          Disclaimer: <br />
          The individuals appearing in this images/video have provided full
          consent <br /> for the use of their images, videos and likeness for
          promotional and distribution purposes.
        </span>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Gallery Grid */}
        <div
          className="row gallery-grid isotope-container"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {renderGalleryItems()}
        </div>

        {showViewMore && (
          <div className="text-center mt-5">
            <Link
              to="/gallery"
              className="btn btn-outline-primary rounded-pill px-4 py-2"
            >
              View More
            </Link>
          </div>
        )}
      </div>

      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <span>
          All photos featured in this gallery are shared with the full consent
          of the individuals Depicted in the images.<br/> Each image represents real
          stories of love and faith, shared voluntarily as part of the Love
          Vision Foundation. <br/> Unauthorized use, reproduction, or distribution of
          these images is strictly prohibited.
        </span>
      </div>
    </section>
  );
};

export default GallerySection;
