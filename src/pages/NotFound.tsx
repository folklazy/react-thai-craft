
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { Camera } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-photo-cream p-4 text-center">
      <Camera size={64} className="text-photo-orange mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6">Oops! This page seems to be out of frame.</p>
      <p className="text-lg mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>Return to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
