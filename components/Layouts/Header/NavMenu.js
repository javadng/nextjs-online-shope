import { Fragment } from "react";
import Link from "next/link";
import Overlay from "../../../components/UI/Modal/Overlay";
import classes from "./NavMenu.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import Search from "./search";

const NavMenu = props => {
  const navClassActive = props.isActive ? classes.isActive : "";

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
        <div className={classes.search_box}>
          <Search />
        </div>
      </ul>
    </Fragment>
  );
};

export default NavMenu;
