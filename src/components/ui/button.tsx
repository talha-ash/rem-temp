import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils";
import { ThemeConfig } from "../../theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `${ThemeConfig.primary} ${ThemeConfig.primaryText} ${ThemeConfig.primaryHover}`,
    secondary: `${ThemeConfig.secondary} ${ThemeConfig.secondaryText} ${ThemeConfig.secondaryHover}`,
    outline: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300",
  };

  return (
    <button
      className={cn(
        "font-medium transition-colors inline-flex items-center justify-center px-4 py-2",
        variantClasses[variant],
        props.disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
}
