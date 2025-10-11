import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image2 from "@/assets/images/testimonialsbg.webp";

const testimonials = [
  {
    name: "Olusegun Owobanjo",
    text: "We uphold the belief that our God-given gifts and influence that should be used to restore sight, bring hope, and uplift lives through the love and acceptance of Christ his son.",
  },
  {
    name: "Olusegun Owobanjo",
    text: "We uphold the belief that our God-given gifts and influence that should be used to restore sight, bring hope, and uplift lives through the love and acceptance of Christ his son.",
  },
  {
    name: "Olusegun Owobanjo",
    text: "We uphold the belief that our God-given gifts and influence that should be used to restore sight, bring hope, and uplift lives through the love and acceptance of Christ his son.",
  },
  {
    name: "Olusegun Owobanjo",
    text: "We uphold the belief that our God-given gifts and influence that should be used to restore sight, bring hope, and uplift lives through the love and acceptance of Christ his son.",
  },
  {
    name: "Olusegun Owobanjo",
    text: "We uphold the belief that our God-given gifts and influence that should be used to restore sight, bring hope, and uplift lives through the love and acceptance of Christ his son.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section dark-background">
      <img
        src={Image2}
        className="testimonials-bg"
        alt=""
      />

      <div
        className="container aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          speed={600}
          className="mySwiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item text-center">
                <h3>{t.name}</h3>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{t.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
