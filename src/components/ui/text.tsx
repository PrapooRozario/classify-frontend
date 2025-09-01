
type TextVariant = "h1" | "h2" | "h3" | "p" | "small";

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: React.ElementType; 
};

const Text: React.FC<TextProps> = ({ children, variant = "p", className = "", as }) => {
  const variantClass = {
    h1: "font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl",
    small: "text-sm font-light text-neutral-400",
  }[variant];

  const Component = as || variant; 

  return <Component className={`${variantClass} ${className}`}>{children}</Component>;
};

export default Text;
