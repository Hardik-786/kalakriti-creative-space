import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-art-gold to-art-gold-light rounded-full"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-art-gold to-art-burgundy bg-clip-text text-transparent">
            Kalakriti
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#gallery" className="text-foreground hover:text-art-gold transition-colors">Gallery</a>
          <a href="#auctions" className="text-foreground hover:text-art-gold transition-colors">Live Auctions</a>
          <a href="#artists" className="text-foreground hover:text-art-gold transition-colors">Artists</a>
          <a href="#about" className="text-foreground hover:text-art-gold transition-colors">About</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-foreground hover:text-art-gold">Sign In</Button>
          <Button className="bg-gradient-to-r from-art-gold to-art-gold-light hover:from-art-gold-light hover:to-art-gold text-art-navy font-semibold shadow-lg">
            Join as Artist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;