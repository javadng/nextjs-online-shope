import Link from "next/link";
import classes from "./navItem.module.scss";

const NavItem = props => {
  let childElements;
  if (props.childrenItems?.length) {
    childElements = (
      <ul className={classes.nav__submenu}>
        {props.childrenItems.map(el => (
          <li key={el.id}>
            <Link href={el.url}>{el.label}</Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <li className={classes.nav__item}>
      <Link href={props.href}>{props.label}</Link>
      {childElements}
    </li>
  );
};

export default NavItem;
