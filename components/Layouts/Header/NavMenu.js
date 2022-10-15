import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Overlay from '../../UI/Modal/Overlay';
import classes from './NavMenu.module.scss';

const NavMenu = props => {
  const navClassActive = props.isActive ? classes.isActive : '';

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
          <NavLink
            to="/home"
            href="text"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/categories"
            href="text"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ''
            }
          >
            Products
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/"
            href="text"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ''
            }
          >
            Demo
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/blog"
            href="text"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ''
            }
          >
            Blog
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/checkout"
            href="text"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ''
            }
          >
            Order
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/contact-us"
            href="text"
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ''
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavMenu;
