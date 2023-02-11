import classes from "./Header.module.scss";
import Navbar from "./NavBar";

const Header = props => {
  return (
    <header className={classes.header}>
      <Navbar menu={props.menu} />
    </header>
  );
};

export default Header;
