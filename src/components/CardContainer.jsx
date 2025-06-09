export default function CardContainer({ children, className = '' }) {
  return (
    <div className={`bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
