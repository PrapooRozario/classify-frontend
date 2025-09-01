type bgProps = {
  children: React.ReactNode;
  className?: string;
  variant: "1" | "2";
};

const Bg = ({ children, className = "", variant }: bgProps) => {
  const variants: Record<"1" | "2", string> = {
    "1": "relative bg-gradient-to-t cursor-pointer from-neutral-900 to-neutral-900/50 p-6 rounded-2xl border border-neutral-800",
    "2": "bg-neutral-800/50 flex items-center relative border-neutral-800 border rounded-xl",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Bg;
