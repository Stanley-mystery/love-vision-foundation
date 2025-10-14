import {
  HomeAboutsSection,
  HomeClientsSection,
  HomeMainAboutSection,
  HomePartnersProfileSection,
  HomeTestimonialsSection,
  HomeHeroSection,
  HomeImpacts,
} from ".";
import AppLayout from "@/components/layouts/app-layout";
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
    </AppLayout>
  );
}

export default HomePageView;
