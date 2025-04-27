
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateForm = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit form data to server
      console.log("Password reset requested for:", email);
      
      toast({
        title: "Reset email sent",
        description: "Please check your email to reset your password.",
      });
      
      // Simulate success (in a real app, this would be after API confirmation)
      setIsSubmitted(true);
      
      // Redirect to OTP verification page
      // In a real application, navigate to the OTP verification page
      // navigate("/otp-verification");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
        <p className="text-center mb-6">
          Please enter your email to reset your password.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              icon="mail"
              value={email}
              onChange={handleChange}
              error={error}
              disabled={isSubmitted}
            />
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            variant="primary" 
            size="lg"
            disabled={isSubmitted}
          >
            Submit
          </Button>
        </form>
        
        <div className="text-center mt-4">
          <Link to="/login" className="text-photo-orange-dark hover:underline">
            Return to Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
