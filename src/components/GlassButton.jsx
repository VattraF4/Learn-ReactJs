import "./GlassButton.css";

function GlassButton({ children, onClick }) {
  return (
    <button type = "button" className="glass-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default GlassButton;
