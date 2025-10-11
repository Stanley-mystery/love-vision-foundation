import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import GLightbox from "glightbox";

import GalleryImage1 from "@/assets/images/galleryImage1.jpeg";
import GalleryImage2 from "@/assets/images/galleryImage2.jpeg";
import GalleryImage3 from "@/assets/images/galleryImage3.jpeg";
import GalleryImage4 from "@/assets/images/gallleryImage4.jpeg";
import GalleryImage5 from "@/assets/images/galleryImage5.jpeg";
import GalleryImage6 from "@/assets/images/galleryImage6.jpeg";

const galleryImages = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
];

const GallerySection: React.FC = () => {
  // Initialize Glightbox after render
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <section id="gallery-slider" className="gallery-slider section">
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
                  <div className="gallery-img">
                    <a
                      className="glightbox"
                      data-gallery="images-gallery"
                      href={img}
                    >
                      <img
                        src={img}
                        className="img-fluid"
                        alt={`Gallery image ${i + 1}`}
                      />
                      <div className="gallery-overlay">
                        <i className="bi bi-plus-circle"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
