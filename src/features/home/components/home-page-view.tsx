import {
  HomeAboutsSection,
  HomeClientsSection,
  HomeMainAboutSection,
  HomePartnersProfileSection,
  HomeTestimonialsSection,
  HomeHeroSection,
  HomeImpacts,
  QuickActionSection,
  HomeGallerySection,
} from ".";
import AppLayout from "@/components/layouts/app-layout";
import { DonatSection } from "@/features/donate/component";
function HomePageView() {
  return (
    <AppLayout>
      <HomeHeroSection />
      <HomeAboutsSection />
      <HomeImpacts />
      <HomeMainAboutSection />
      <HomePartnersProfileSection />
      <HomeTestimonialsSection />
      <HomeClientsSection />
      <QuickActionSection />
      <DonatSection />
      <HomeGallerySection />
    </AppLayout>
  );
}

export default HomePageView;
