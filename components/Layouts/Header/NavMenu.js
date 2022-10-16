import { Fragment } from "react";
import Link from "next/link";
import Overlay from "../../UI/Modal/Overlay";
import classes from "./NavMenu.module.scss";

const NavMenu = props => {
  const navClassActive = props.isActive ? classes.isActive : "";

  return (
    <Fragment>
      {props.isActive && <Overlay onClick={props.onToggleFn} />}
      <ul className={`${classes.nav} ${navClassActive}`}>
        {props.isActive && (
          <span className={classes.closeBtn} onClick={props.onToggleFn}>
            X
          </span>
        )}
        <li className={classes.nav__item}>
          <Link
            href="/"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Home
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link
            href="/categories"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Products
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link
            href="/"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Demo
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link
            href="/blog"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Blog
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link
            href="/checkout"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Order
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link
            href="/contact-us"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavMenu;
