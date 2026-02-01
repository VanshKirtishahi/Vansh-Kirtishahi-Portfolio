export const BackgroundGradient = ({ 
  children, 
  className,
  containerClassName 
}) => {
  return (
    <div className={`relative p-[2px] ${containerClassName}`}>
      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-sm" />
      <div className={`relative bg-slate-950 rounded-[22px] overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};