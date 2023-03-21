const Button = ({
  title,
  color,
  bgcolor,
  border,
  padding,
  borderRadius,
  lineHeight,
  onClick,
}) => {
  const ButtonStyle = {
    backgroundColor: bgcolor,
    color: color,
    border: border,
    padding: padding,
    borderRadius: borderRadius,
    lineHeight: lineHeight,
  };
  return (
    <button className="Button" style={ButtonStyle} onClick={onClick}>
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: "button",
  bgcolor: "#bc2243",
  border: "none",
  padding: "5px 15px",
  color: "white",
  borderRadius: "10px",
  lineHeight: "1.5",
};

export default Button;
