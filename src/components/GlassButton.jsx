import "./GlassButton.css";

function GlassButton({ children, onClick }) {
  return (
    <button className="glass-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default GlassButton;
