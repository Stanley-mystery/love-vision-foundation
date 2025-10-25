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
      <section id="about-us" className="section about-us">
        <div className="container">
          <div
            className="row gy-4 border shadow rounded p-4"
            style={{ backgroundColor: "var(--accent-color)", color: "white" }}
          >
            <div
              className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div id="paypal-container-D23CSCSWX4NDW"></div>
            </div>

            <div
              className="col-lg-6 order-2 order-lg-1 content aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-white">
                Voluptatem dignissimos provident quasi corporis
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle text-white"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle text-white"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle text-white"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Donate;
