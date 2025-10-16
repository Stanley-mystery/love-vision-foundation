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
    // Check if PayPal SDK is already loaded
    if (window.paypal?.HostedButtons) {
      window.paypal
        .HostedButtons({ hostedButtonId: "D23CSCSWX4NDW" })
        .render("#paypal-container-D23CSCSWX4NDW");
      return;
    }

    // Otherwise, dynamically load it
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAM_AnZkn2z0cTfViY5KhkkIo9qmGQZ27DWI70m8sQHAHKipmV5niyqvge9ptRu-F4d92b6EftUC2FOC0&components=hosted-buttons&enable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = () => {
      if (window.paypal?.HostedButtons) {
        window.paypal
          .HostedButtons({ hostedButtonId: "D23CSCSWX4NDW" })
          .render("#paypal-container-D23CSCSWX4NDW");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <AppLayout>
      <section id="contact" className="contact section">
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
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
