
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit form data to server
      console.log("Form submitted:", formData);
      
      toast({
        title: "Account created!",
        description: "You have successfully signed up for Photo Quest.",
      });
      
      // Redirect to login or dashboard
      // navigate("/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <p className="text-center mb-6">Create an account to start playing Photo Quest.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Name/Surname"
              icon="user"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              icon="mail"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
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
          
          <Button type="submit" fullWidth variant="primary" size="lg">
            Sign Up
          </Button>
        </form>
        
        <div className="text-center mt-4">
          <span>Already Have an Account? </span>
          <Link to="/login" className="text-photo-orange-dark hover:underline font-medium">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
