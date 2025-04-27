
import { useState } from "react";
import { Link } from "react-router-dom";
import OTPInput from "@/components/OTPInput";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();

  const handleComplete = (code: string) => {
    setOtp(code);
  };

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a complete verification code.",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifying(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "OTP verified successfully!",
      });
      
      // Redirect to reset password page
      // navigate("/reset-password");
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "A new verification code has been sent to your email.",
      });
      
      // Clear current OTP
      setOtp("");
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend verification code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="text-2xl font-bold text-center mb-6">OTP Verification</h1>
        <p className="text-center mb-6">
          Please enter the verification code below.
        </p>
        
        <div className="mb-6">
          <OTPInput length={6} onComplete={handleComplete} />
        </div>
        
        <Button 
          onClick={handleVerify}
          fullWidth 
          variant="primary" 
          size="lg"
          disabled={isVerifying || otp.length !== 6}
        >
          {isVerifying ? "Verifying..." : "Verify Code"}
        </Button>
        
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={handleResendCode}
            disabled={isResending}
            className="text-photo-orange-dark hover:underline"
          >
            {isResending ? "Sending..." : "Resend Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
