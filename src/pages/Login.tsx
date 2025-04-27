
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    
    if (!formData.usernameOrEmail.trim()) {
      newErrors.usernameOrEmail = "Username or email is required";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit form data to server
      console.log("Form submitted:", formData);
      
      toast({
        title: "Logged in!",
        description: "Welcome back to Photo Quest.",
      });
      
      // Redirect to dashboard
      // navigate("/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-2xl font-bold text-center mb-6">Log in</h1>
        <p className="text-center mb-6">Log in to start playing Photo Quest.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="usernameOrEmail"
              placeholder="Username/Email"
              icon="mail"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              error={errors.usernameOrEmail}
            />
          </div>
          
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
          
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-photo-orange-dark hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <Button type="submit" fullWidth variant="primary" size="lg">
            Log in
          </Button>
        </form>
        
        <div className="text-center mt-4">
          <span>Don't have an account yet? </span>
          <Link to="/signup" className="text-photo-orange-dark hover:underline font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
