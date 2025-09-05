
type TextVariant = "h1" | "h2" | "h3" | "p" | "small" | "error";

type TextProps = {
  children: React.ReactNode;
variant?: TextVariant;
  className?: string;
  as?: React.ElementType; 
};

const Text: React.FC<TextProps> = ({ children, variant = "p", className = "", as }) => {
  const variantClass = {
    h1: "font-bold sm:text-2xl md:text-3xl lg:text-4xl text-xl",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-neutral-300 text-sm sm:text-base md:text-lg",
    small: "text-sm font-light text-neutral-400",
    error: "text-red-500 text-xs"
  }[variant];

  const Component = as || "p"; 

  return <Component className={`${variantClass} ${className}`}>{children}</Component>;
};

export default Text;
