import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Priya Sharma",
    currentBid: "₹25,000",
    timeLeft: "2h 15m",
    image: artwork1,
    isLive: true
  },
  {
    id: 2,
    title: "Serene Mountains",
    artist: "Ravi Kumar",
    currentBid: "₹18,500",
    timeLeft: "5h 42m",
    image: artwork2,
    isLive: true
  },
  {
    id: 3,
    title: "Portrait in Light",
    artist: "Meera Patel",
    currentBid: "₹32,000",
    timeLeft: "1h 08m",
    image: artwork3,
    isLive: false
  }
];

const FeaturedArtworks = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-art-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured 
            <span className="bg-gradient-to-r from-art-gold to-art-burgundy bg-clip-text text-transparent"> Artworks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional pieces from talented local artists, now available in our live auction gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {artwork.isLive && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse">
                    LIVE AUCTION
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-art-gold transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground mb-4">by {artwork.artist}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Bid</p>
                    <p className="text-2xl font-bold text-art-gold">{artwork.currentBid}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Time Left</p>
                    <p className="text-lg font-semibold text-art-burgundy">{artwork.timeLeft}</p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-art-gold to-art-gold-light hover:from-art-gold-light hover:to-art-gold text-art-navy font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {artwork.isLive ? 'Place Bid' : 'View Details'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-art-gold text-art-gold hover:bg-art-gold hover:text-art-navy px-8 py-6 text-lg font-semibold"
          >
            View All Artworks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;