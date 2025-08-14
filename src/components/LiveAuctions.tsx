import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";

const LiveAuctions = () => {
  return (
    <section id="auctions" className="py-20 bg-gradient-to-b from-art-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live 
            <span className="bg-gradient-to-r from-art-burgundy to-art-gold bg-clip-text text-transparent"> Auctions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the thrill of real-time bidding and secure your favorite artworks from talented artists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Live Auction */}
          <Card className="lg:col-span-2 border-2 border-art-gold shadow-glow bg-gradient-card">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/3ec99a94-b97e-49ef-87b6-e0f5933117ce.png" 
                      alt="Featured Auction Artwork" 
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse text-lg px-4 py-2">
                      LIVE NOW
                    </Badge>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    "Monsoon Dreams"
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6">by Ananya Gupta</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/50 rounded-lg">
                      <div className="text-3xl font-bold text-art-gold">₹45,000</div>
                      <div className="text-sm text-muted-foreground">Current Bid</div>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-lg">
                      <div className="text-3xl font-bold text-art-burgundy">00:42:15</div>
                      <div className="text-sm text-muted-foreground">Time Left</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>24 bidders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>15 bids in last hour</span>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-art-burgundy to-red-600 hover:from-red-600 hover:to-art-burgundy text-white font-bold py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Join Auction
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Auctions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-muted shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-art-gold" />
                <Badge variant="outline" className="border-art-gold text-art-gold">Starting Soon</Badge>
              </div>
              <h4 className="text-lg font-bold mb-2">"Urban Reflections"</h4>
              <p className="text-muted-foreground mb-4">by Rajesh Iyer</p>
              <div className="text-2xl font-bold text-art-gold mb-4">₹15,000</div>
              <p className="text-sm text-muted-foreground">Starts in 2 hours</p>
            </CardContent>
          </Card>

          <Card className="border border-muted shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-art-gold" />
                <Badge variant="outline" className="border-art-gold text-art-gold">Tomorrow</Badge>
              </div>
              <h4 className="text-lg font-bold mb-2">"Botanical Series #3"</h4>
              <p className="text-muted-foreground mb-4">by Kavya Nair</p>
              <div className="text-2xl font-bold text-art-gold mb-4">₹22,000</div>
              <p className="text-sm text-muted-foreground">Starts at 6 PM</p>
            </CardContent>
          </Card>

          <Card className="border border-muted shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-art-gold" />
                <Badge variant="outline" className="border-art-gold text-art-gold">This Week</Badge>
              </div>
              <h4 className="text-lg font-bold mb-2">"Digital Renaissance"</h4>
              <p className="text-muted-foreground mb-4">by Arjun Singh</p>
              <div className="text-2xl font-bold text-art-gold mb-4">₹35,000</div>
              <p className="text-sm text-muted-foreground">Friday, 8 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;