
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Mail, Eye, EyeOff, User, Lock } from "lucide-react";
import { useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: "mail" | "user" | "password" | "none";
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon = "none", error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const iconComponents = {
      mail: <Mail size={18} className="text-gray-500" />,
      user: <User size={18} className="text-gray-500" />,
      password: showPassword ? 
        <EyeOff size={18} className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(false)} /> :
        <Eye size={18} className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(true)} />,
      none: null,
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className="w-full">
        <div className="relative">
          <input
            type={inputType}
            className={cn(
              "w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-photo-orange",
              icon !== "none" && "pl-10",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            ref={ref}
            {...props}
          />
          {icon !== "none" && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {iconComponents[icon]}
            </div>
          )}
          {icon === "password" && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {iconComponents.password}
            </div>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
