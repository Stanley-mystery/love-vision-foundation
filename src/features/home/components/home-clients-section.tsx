import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "@/assets/images/partnersImage.png";

const clients = [Image, Image, Image, Image, Image, Image, Image, Image];

const HomeClientsSection = () => {
  return (
    <section id="clients" className="clients section">
      <div
        className="container section-title aos-init aos-animate"
        data-aos="fade-up"
      >
        <h2>Our Partners</h2>
        <p>
          <span>Meet Our</span>{" "}
          <span className="description-title">Partners</span>
        </p>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={"auto"}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 },
          }}
          className="align-items-center"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <a href="https://eyefoundationhospital.com/" target="_blank">
                <img
                  src={client}
                  className="img-fluid"
                  alt={`Client ${index}`}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeClientsSection;
