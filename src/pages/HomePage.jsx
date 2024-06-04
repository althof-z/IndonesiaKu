import Footer from '../components/Footer';
import AboutSection from '../components/Home/AboutSection';
import ContactSection from '../components/Home/ContactSection';
import FAQSection from '../components/Home/FAQSection';
import FeatureSection from '../components/Home/FeatureSection';
import HeroSection from '../components/Home/HeroSection';
import TeamSection from '../components/Home/TeamSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <Footer />


      {/* Back To Top Start */}
      <a className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark">
        <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
      </a>
      {/* Back To Top End */}
    </>
  );
}

export default HomePage;
