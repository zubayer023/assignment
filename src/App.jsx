import CompaniesLogo from "./components/companiesLogos/CompaniesLogo";
import Footer from "./components/footer/Footer";
import FqsSection from "./components/fqsSection/FqsSection";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Pricing from "./components/pricesection/Pricing";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonial/Testimonial";
import TrialSection from "./components/trialSection/TrialSection";

export default function App() {
  return (
    <>
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <Hero />
        <CompaniesLogo />
        <Service />
        <Testimonial />
        <Pricing />
        <FqsSection />
        <TrialSection />
        <Footer />
      </body>
    </>
  );
}
