import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import LiveAuctions from "@/components/LiveAuctions";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedArtworks />
      <LiveAuctions />
      <ArtistSpotlight />
      <Footer />
    </div>
  );
};

export default Index;
