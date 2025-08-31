
type TextVariant = "h1" | "h2" | "h3" | "p" | "small";

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: React.ElementType; 
};

const Text: React.FC<TextProps> = ({ children, variant = "p", className = "", as }) => {
  const variantClass = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base font-normal text-neutral-400",
    small: "text-sm font-light text-neutral-400",
  }[variant];

  const Component = as || variant; 

  return <Component className={`${variantClass} ${className}`}>{children}</Component>;
};

export default Text;
