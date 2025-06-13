
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import ProductListing from "../components/ProductListing";
import ContactSection from "../components/ContactSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductListing />
      <ProductShowcase/>
      <ContactSection />
      
    </div>
  );
};

export default Index;
