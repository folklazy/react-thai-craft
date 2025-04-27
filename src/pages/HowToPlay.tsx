
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { X, Camera, Search, Trophy, Share } from "lucide-react";

const HowToPlay = () => {
  return (
    <div className="min-h-screen flex flex-col bg-photo-cream">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-photo-orange/30 rounded-lg p-8 w-full max-w-3xl relative">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">How to Play Photo Quest</h1>
            <Link to="/" aria-label="Close">
              <X size={24} className="text-gray-700 hover:text-black" />
            </Link>
          </div>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-photo-orange/40 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-white p-2 rounded-full">
                <Camera size={24} className="text-photo-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">1. Take Photos Based on Random Prompts</h3>
                <p className="mt-2">
                  Hit "New Challenge" to receive a randomized photo prompt. Then, unleash your creativity and snap a photo that brings the prompt to life.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-photo-orange/40 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-white p-2 rounded-full">
                <Search size={24} className="text-photo-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">2. Guess Other Players' Prompts Behind Each of Their Photos</h3>
                <p className="mt-2">
                  Explore photos submitted by other players and try to guess the prompt from four options. Score 10 points for each correct answer!
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-photo-orange/40 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-white p-2 rounded-full">
                <Trophy size={24} className="text-photo-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">3. Climb Up the Leaderboard</h3>
                <p className="mt-2">
                  Earn 10 points whenever you guess the prompts correctly. Rack up points and rise through the ranks on the leaderboard.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-photo-orange/40 p-4 rounded-lg flex items-start gap-4">
              <div className="bg-white p-2 rounded-full">
                <Share size={24} className="text-photo-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">4. Share Your Photos</h3>
                <p className="mt-2">
                  Showcase your photos on social media to your fellow friends.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button size="lg">
              <Camera className="mr-2 h-5 w-5" /> Start Playing
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowToPlay;
