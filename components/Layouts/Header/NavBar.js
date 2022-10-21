import { Fragment, useState } from "react";

import { useSelector } from "react-redux";

import classes from "./Navbar.module.scss";
import ContainerGrid from "../../UI/ContainerGrid";
import NavMenu from "./NavMenu";
// import navIcon from "../../../assets/img/favicon.png";
import Cart from "../../Cart/Cart";
import Image from "next/image";

const Navbar = props => {
  const [menuIsShown, setMenuIsShowen] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  const { totalQuantity } = useSelector(state => state.cart);

  const menuToggelerHandler = () => {
    setMenuIsShowen(prevState => !prevState);
  };

  const modalShownHandler = () => {
    setModalShown(prevState => !prevState);
  };

  const togglerClass = menuIsShown
    ? `${classes["toggel--icon"]} ${classes["isActive--toggel"]}`
    : classes["toggel--icon"];

  return (
    <Fragment>
      {modalShown && (
        <Cart modalState={modalShown} togglerFn={modalShownHandler} />
      )}
      <ContainerGrid className={classes.nav}>
        <div className={classes.nav__title}>
          <Image
            alt="online shope icon"
            src="/favicon.png"
            width={30}
            height={30}
          />
          <span className={classes.nav__iconTitle}>Online Shop</span>
        </div>
        <NavMenu isActive={menuIsShown} onToggleFn={menuToggelerHandler} />
        <div className={classes.nav__icons}>
          <span
            onClick={modalShownHandler}
            className={classes["nav__shop--icon"]}
          >
            {/* <FontAwesomeIcon icon={solid("shopping-cart")} size="lg" /> */}
            <b className={classes.cart__quantity}>{totalQuantity}</b>
          </span>
          <div className={classes.nav__toggeler} onClick={menuToggelerHandler}>
            <span className={togglerClass}></span>
          </div>
        </div>
      </ContainerGrid>
    </Fragment>
  );
};

export default Navbar;