import { Palette, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-art-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-art-gold to-art-gold-light rounded-full"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-art-gold to-art-gold-light bg-clip-text text-transparent">
                Kalakriti
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bridging the gap between talented local artists and art enthusiasts through our innovative auction platform.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-art-gold transition-colors cursor-pointer">
                <Palette className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-art-gold-light">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#gallery" className="text-gray-300 hover:text-art-gold transition-colors">Gallery</a></li>
              <li><a href="#auctions" className="text-gray-300 hover:text-art-gold transition-colors">Live Auctions</a></li>
              <li><a href="#artists" className="text-gray-300 hover:text-art-gold transition-colors">Featured Artists</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-art-gold transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-art-gold-light">For Artists</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-art-gold transition-colors">Join Platform</a></li>
              <li><a href="#" className="text-gray-300 hover:text-art-gold transition-colors">Upload Artwork</a></li>
              <li><a href="#" className="text-gray-300 hover:text-art-gold transition-colors">Artist Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-art-gold transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-art-gold-light">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-art-gold" />
                <span className="text-gray-300">hello@kalakriti.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-art-gold" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-art-gold" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kalakriti. All rights reserved. | Created for Educational Purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;