import { AppLayout } from "@/components/layouts";
import { PageTitle } from "@/components/page-title";
import { ContactDetailsSection } from ".";

const ContactView = () => {
  return (
    <AppLayout>
      <PageTitle
        title="Contact"
        description="Get in touch with us."
        currentPage="Contact"
      />
      <ContactDetailsSection />
    </AppLayout>
  );
};

export default ContactView;
