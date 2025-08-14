import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Palette } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    speciality: "Abstract Art",
    rating: 4.9,
    artworksSold: 47,
    bio: "Contemporary artist specializing in vibrant abstract compositions that capture the essence of urban life.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c634?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Ravi Kumar",
    location: "Bangalore, Karnataka",
    speciality: "Landscape",
    rating: 4.8,
    artworksSold: 32,
    bio: "Nature enthusiast and landscape painter, bringing the beauty of India's diverse landscapes to canvas.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Ahmedabad, Gujarat",
    speciality: "Portraits",
    rating: 4.9,
    artworksSold: 28,
    bio: "Portrait artist with a passion for capturing human emotions and expressions in realistic detail.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const ArtistSpotlight = () => {
  return (
    <section id="artists" className="py-20 bg-gradient-to-b from-background to-art-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured 
            <span className="bg-gradient-to-r from-art-gold to-art-burgundy bg-clip-text text-transparent"> Artists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented artists who bring creativity to life and make Kalakriti a vibrant marketplace for art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Card 
              key={artist.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img 
                    src={artist.avatar} 
                    alt={artist.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-art-gold/20 group-hover:border-art-gold transition-all duration-300"
                  />
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-art-gold to-art-gold-light text-art-navy">
                    Featured
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-art-gold transition-colors">
                  {artist.name}
                </h3>
                
                <div className="flex items-center justify-center gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <p className="text-muted-foreground">{artist.location}</p>
                </div>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Palette className="w-4 h-4 text-art-gold" />
                  <p className="text-art-gold font-medium">{artist.speciality}</p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {artist.bio}
                </p>
                
                <div className="flex justify-between items-center mb-6 p-4 bg-white/50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-foreground">{artist.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-art-gold text-lg">{artist.artworksSold}</div>
                    <div className="text-xs text-muted-foreground">Sold</div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-art-gold to-art-gold-light hover:from-art-gold-light hover:to-art-gold text-art-navy font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Portfolio
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
            Discover More Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;