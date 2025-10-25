import { AppLayout } from "@/components/layouts";
import { GallerySection } from ".";

const GalleryView = () => {
  return (
    <AppLayout>
      {/* <PageTitle
        title="Gallery"
        description="Explore moments that define our journey — from our dedicated team and engaging programs to the smiles and stories that make Love Vision Foundation a truly special place. Each photo captures our mission of growth, healing, and transformation in action."
        currentPage="Gallery"
      /> */}
      <GallerySection />
    </AppLayout>
  );
};
export default GalleryView;
