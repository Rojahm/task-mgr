import Button from "./Button";
const Header = (props) => {
  return (
    <div className="Header">
      <div className="d-flex justify-content-evenly mt-4">
        <h2>
          {props.title} <span>{props.name}</span>
        </h2>
        <Button title="Add" color="yellow" bgcolor="black" />
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Good day",
  name: "roja",
};

export default Header;
