export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm border border-black/40 rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  )
}
