import Button from "./Button";
const Header = ({ title, name, onAdd, showAdd }) => {
  return (
    <div className="Header">
      <div className="d-flex justify-content-evenly mt-4">
        <h2>
          <span className="text-capitalize">{name}'s </span>
          {title}
        </h2>
        <Button
          title={showAdd ? "Close" : "Add"}
          color="white"
          bgcolor={showAdd ? "red" : "black"}
          onClick={onAdd}
        />
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  name: "roja",
};

export default Header;
