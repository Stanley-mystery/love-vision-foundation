import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import GLightbox from "glightbox";

// Import your gallery images
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

// Store all images in an array
const galleryImages = [
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

const HomeGallerySection: React.FC = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <section id="gallery-slider" className="gallery-slider section py-5">
      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="gallery-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation
            loop
            speed={800}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="swiper-coverflow"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="gallery-item">
                  <div className="gallery-img position-relative overflow-hidden rounded-3">
                    <a
                      className="glightbox"
                      data-gallery="images-gallery"
                      href={img}
                    >
                      <img
                        src={img}
                        className="img-fluid w-100"
                        alt={`Gallery image ${i + 1}`}
                        style={{
                          objectFit: "cover",
                          height: "300px",
                          borderRadius: "12px",
                        }}
                      />
                      <div
                        className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(0, 0, 0, 0.3)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <i className="bi bi-plus-circle fs-2 text-white"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="section-title aos-init aos-animate" data-aos="fade-up">
          <a href="/gallery" className="btn btn-outline-primary">View More <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
