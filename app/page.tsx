import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CityProfileSection from "@/components/city-profile-section"
import DestinationsCarousel from "@/components/destinations-carousel"
import AdventuresSection from "@/components/adventures-section"
import NewsUpdatesSection from "@/components/news-updates-section"
import LeadershipSection from "@/components/leadership-section"
import TendersSection from "@/components/tenders-section"
import MarketSection from "@/components/market-section"
import HiddenPlacesSection from "@/components/hidden-places-section"
import DigitalServicesSection from "@/components/digital-services-section"
import GuidelinesSection from "@/components/guidelines-section"
import ConnectSection from "@/components/connect-section"
import MobileAppSection from "@/components/mobile-app-section"
import ContactDirectorySection from "@/components/contact-directory-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CityProfileSection />
      <DestinationsCarousel />
      <AdventuresSection />
      <NewsUpdatesSection />
      <LeadershipSection />
      <HiddenPlacesSection />
      <DigitalServicesSection />
      <TendersSection />
      <MarketSection />
      <GuidelinesSection />
      <ConnectSection />
      <MobileAppSection />
      <ContactDirectorySection />
      <Footer />
    </main>
  )
}
