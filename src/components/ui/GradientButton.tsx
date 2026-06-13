import { type LucideIcon } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  icon?: LucideIcon;
  className?: string;
  type?: "button" | "submit";
  download?: boolean | string;
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
  type = "button",
  download,
}: GradientButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 backdrop-blur-sm",
    outline:
      "text-white border border-white/15 hover:bg-white/5 hover:border-white/30 hover:scale-105 active:scale-95",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={download}>
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}
