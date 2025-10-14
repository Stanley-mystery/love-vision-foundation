import { AppLayout } from "@/components/layouts";
import { useEffect } from "react";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

const Donate = () => {
  useEffect(() => {
    if (window.paypal?.HostedButtons) {
      window.paypal
        .HostedButtons({
          hostedButtonId: "D23CSCSWX4NDW",
        })
        .render("#paypal-container-D23CSCSWX4NDW");
    }
  }, []);

  return (
    <AppLayout>
      <section id="contact" className="contact section">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 mb-5 d-flex justify-content-center">
            <div
              className="col-lg-4 aos-init aos-animate d-flex flex-column justify-content-center border rounded p-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div id="paypal-container-D23CSCSWX4NDW"></div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Donate;
