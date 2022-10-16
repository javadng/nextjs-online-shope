import Link from "next/link";
import ContainerGrid from "../../UI/ContainerGrid";
import List from "../../UI/List";
import classes from "./FooterLists.module.scss";

const FooterLists = props => {
  return (
    <ContainerGrid className={classes.footerlists}>
      <List>
        <h1 className={classes.title}>Contact</h1>
        <li className={classes["List--item"]}>Office: +9890000000</li>
        <li className={classes["List--item"]}>Mobile: +9890000000</li>
        <li className={classes["List--item"]}>Office: Iran,Tehran,405</li>
      </List>
      <List>
        <h1 className={classes.title}>Customer Services</h1>
        <li className={classes["List--item"]}>
          <Link href="/">Trending Products</Link>
        </li>
        <li className={classes["List--item"]}>
          <Link href="/">Shipping & return policy</Link>
        </li>
        <li className={classes["List--item"]}>
          <Link href="/">contact US</Link>
        </li>
        <li className={classes["List--item"]}>
          <Link href="/">F.A.Q.s</Link>
        </li>
      </List>
      <List>
        <h1 className={classes.title}>Special Offer</h1>
        <li className={classes["List--item"]}>
          <Link href="/">Trending Products</Link>
        </li>
        <li className={classes["List--item"]}>
          <Link href="/">Fearured</Link>
        </li>
        <li className={classes["List--item"]}>
          <Link href="/">Men's Collections</Link>
        </li>
        <li className={classes["List--item"]}>
          <Link href="/">Top Products</Link>
        </li>
      </List>
    </ContainerGrid>
  );
};

export default FooterLists;
