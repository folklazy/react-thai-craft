
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Success",
          description: "Your password has been reset successfully!",
        });
        
        // Redirect to login page
        // navigate("/login");
        
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to reset password. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>
        <p className="text-center mb-6">
          Please enter your new password.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              icon="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>
          
          <div>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              icon="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>
          
          <Button 
            type="submit" 
            fullWidth 
            variant="primary" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Confirming..." : "Confirm"}
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

export default ResetPassword;
