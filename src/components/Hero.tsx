import { Button } from "@/components/ui/button";
import heroGallery from "@/assets/hero-gallery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroGallery} 
          alt="Art Gallery Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover & Collect
          <span className="block bg-gradient-to-r from-art-gold to-art-gold-light bg-clip-text text-transparent">
            Extraordinary Art
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Join the premier platform where local artists showcase their masterpieces 
          and collectors discover their next treasured acquisition through live auctions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-art-gold to-art-gold-light hover:from-art-gold-light hover:to-art-gold text-art-navy font-semibold px-8 py-6 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Gallery
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-art-navy px-8 py-6 text-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            View Live Auctions
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-art-gold-light">150+</div>
            <div className="text-sm text-gray-300">Featured Artists</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-art-gold-light">2,500+</div>
            <div className="text-sm text-gray-300">Artworks Sold</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-art-gold-light">₹50L+</div>
            <div className="text-sm text-gray-300">Total Sales</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;