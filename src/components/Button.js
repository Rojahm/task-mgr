const Button = ({ title, color, bgcolor, border, padding, borderRadius }) => {
  const ButtonStyle = {
    backgroundColor: bgcolor,
    color: color,
    border: border,
    padding: padding,
    borderRadius: borderRadius,
  };
  return (
    <div className="Button">
      <button style={ButtonStyle}>{title}</button>
    </div>
  );
};

Button.defaultProps = {
  title: "button",
  bgcolor: "#bc2243",
  border: "none",
  padding: "5px 10px",
  color: "white",
  borderRadius: "4px",
};

export default Button;
