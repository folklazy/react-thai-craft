
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const Index = () => {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      alt: "Sunset over mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
      alt: "Forest trees in autumn"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
      alt: "Mountain lake"
    },
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      alt: "Autumn forest path"
    }
  ];

  const toolImages = [
    {
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&q=80",
      alt: "Person holding camera"
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
      alt: "Map and compass"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
      alt: "Notebook and pen"
    }
  ];

  const inspirationImages = [
    {
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=600&q=80",
      alt: "Urban architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=600&q=80",
      alt: "Modern building"
    },
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
      alt: "Winter landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
      alt: "Cherry blossom path"
    }
  ];

  const competitionImages = [
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
      alt: "Team collaboration"
    },
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      alt: "Award ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      alt: "Leaderboard"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-photo-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Transform photography into an exciting game!
                </h1>
                <p className="text-lg mb-6">
                  Get creative with random photo prompts, guess what inspired others' shots, and rack up points as you play.
                </p>
                <div className="flex gap-4">
                  <Button>
                    <Camera className="mr-2 h-5 w-5" />
                    Start Playing
                  </Button>
                  <Link to="/how-to-play">
                    <Button variant="outline">
                      Learn How To Play
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <PhotoGrid images={heroImages} columns={2} gap={3} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Random Question Section */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <PhotoGrid images={toolImages} columns={1} gap={3} />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Random question, shoot directly to the target
                </h2>
                <p className="text-lg mb-6">
                  Take photos with intent, practice your ideas and challenge your misunderstandings!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Collection Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Collection of works that inspire
                </h2>
                <p className="text-lg mb-6">
                  Share your photography work, view photos from different challenges, like, share, and create new inspirations.
                </p>
              </div>
              <div>
                <PhotoGrid images={inspirationImages} columns={2} gap={3} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Competition Section */}
        <section className="py-12 px-4 md:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Competition" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Compete to be number one on the leaderboard!
                </h2>
                <p className="text-lg mb-6">
                  Compete for points, prove yourself at the top, and earn points by guessing and shooting!
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {competitionImages.map((image, index) => (
                    <img 
                      key={index} 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
