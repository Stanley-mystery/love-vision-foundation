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
    </AppLayout>
  );
}

export default HomePageView;
