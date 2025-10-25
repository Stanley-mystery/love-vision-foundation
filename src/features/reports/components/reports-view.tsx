import { AppLayout } from "@/components/layouts";
import { PageTitle } from "@/components/page-title";
import {ReportsDetailsSection} from ".";

const ReportsView = () => {
  return (
    <AppLayout>
      {/* <PageTitle
        title="Reports"
        description="Our Yearly Reports"
        currentPage="Reports"
      /> */}
      <ReportsDetailsSection />
    </AppLayout>
  );
};

export default ReportsView;
