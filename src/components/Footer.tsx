
import { Link } from "react-router-dom";
import { Camera, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-photo-orange py-4 px-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Camera size={24} className="text-black mr-2" />
          <span className="font-bold text-black">Photo Quest</span>
        </div>
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-black font-medium">"Capture, Share, Guess, Level Up!"</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="#" aria-label="Twitter">
            <Twitter size={20} className="text-black hover:text-white" />
          </Link>
          <Link to="#" aria-label="Facebook">
            <Facebook size={20} className="text-black hover:text-white" />
          </Link>
          <Link to="#" aria-label="Instagram">
            <Instagram size={20} className="text-black hover:text-white" />
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto mt-4 pt-4 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-sm text-black">
        <p>Copyright © {new Date().getFullYear()} Photo Quest</p>
        
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
