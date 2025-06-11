export default function Button({ children, href, onClick, className = "" }) {
  const base = "inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-colors rounded-md";
  const classes = `${base} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
