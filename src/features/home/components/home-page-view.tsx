import {
  HomeAboutsSection,
  HomeClientsSection,
  HomeMainAboutSection,
  HomePartnersProfileSection,
  HomeTestimonialsSection,
  HomeHeroSection,
} from ".";
import AppLayout from "@/components/layouts/app-layout";
function HomePageView() {
  return (
    <AppLayout>
      <HomeHeroSection />
      <HomeAboutsSection />
      <HomeMainAboutSection />
      <HomePartnersProfileSection />
      <HomeTestimonialsSection />
      <HomeClientsSection />
    </AppLayout>
  );
}

export default HomePageView;
