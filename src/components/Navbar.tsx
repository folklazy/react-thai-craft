
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-photo-orange py-3 px-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 font-bold text-lg">
        <Camera size={24} className="text-black" />
        <span className="text-black">Photo Quest</span>
      </Link>
      
      <div className="flex items-center gap-4">
        <Link to="/challenges" className="text-black hover:underline">
          Challenges
        </Link>
        <Link to="/gallery" className="text-black hover:underline">
          Photo Gallery
        </Link>
        <Link to="/leaderboard" className="text-black hover:underline">
          Leaderboard
        </Link>
        <Link to="/signup" className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-100">
          Sign up
        </Link>
        <Link to="/login" className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-100">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
