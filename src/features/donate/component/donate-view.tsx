import { AppLayout } from "@/components/layouts";
import { useEffect } from "react";
import DonatSection from "./donate-section";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

const DonateView = () => {
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
      <DonatSection />
    </AppLayout>
  );
};

export default DonateView;
