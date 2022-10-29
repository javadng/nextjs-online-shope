import classes from "./Header.module.scss";
import Navbar from "./NavBar";
import Search from "./search";

const Header = props => {
  return (
    <header className={classes.header}>
      <Navbar />
      <Search />
    </header>
  );
};

export default Header;
