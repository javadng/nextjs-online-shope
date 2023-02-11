import { Fragment } from "react";
import Link from "next/link";
import Overlay from "../../../components/UI/Modal/Overlay";
import classes from "./NavMenu.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import Search from "./search";
import NavItem from "./NavItem";

const NavMenu = props => {
  const navClassActive = props.isActive ? classes.isActive : "";

  // console.log(props.menu);
  let navMenuContent = "Loading...";

  if (props.menu) {
    navMenuContent = props.menu.map(el => (
      <NavItem
        key={el.id}
        href={el.url}
        label={el.label}
        className={classes.nav__item}
        childrenItems={el.childItems.nodes}
      />
    ));
  }

  return (
    <Fragment>
      {props.isActive && (
        <Overlay shown={props.isActive} onClick={props.onToggleFn} />
      )}
      <ul className={`${classes.nav} ${navClassActive}`}>
        {props.isActive && (
          <span className={classes.closeBtn} onClick={props.onToggleFn}>
            <AiFillCloseCircle />
          </span>
        )}
        {navMenuContent}
        <div className={classes.search_box}>
          <Search />
        </div>
      </ul>
    </Fragment>
  );
};

export default NavMenu;

/* 
        <li className={classes.nav__item}>
          <Link
            href="/categories"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Products
          </Link>
          <ul className={classes.nav__submenu}>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </li>
*/
