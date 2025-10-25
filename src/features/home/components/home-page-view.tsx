import { GallerySection } from "@/features/gallery/components";
import {
  HomeAboutsSection,
  HomeClientsSection,
  HomeMainAboutSection,
  HomePartnersProfileSection,
  HomeTestimonialsSection,
  HomeHeroSection,
  HomeImpacts,
  QuickActionSection,
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
      <GallerySection limit={10} showViewMore />
    </AppLayout>
  );
}

export default HomePageView;
