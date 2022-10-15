import { Link } from 'react-router-dom';
import ContainerGrid from '../../UI/ContainerGrid';
import List from '../../UI/List';
import classes from './FooterLists.module.scss';

const FooterLists = props => {
  return (
    <ContainerGrid className={classes.footerlists}>
      <List>
        <h1 className={classes.title}>Contact</h1>
        <li className={classes['List--item']}>Office: +9890000000</li>
        <li className={classes['List--item']}>Mobile: +9890000000</li>
        <li className={classes['List--item']}>Office: Iran,Tehran,405</li>
      </List>
      <List>
        <h1 className={classes.title}>Customer Services</h1>
        <li className={classes['List--item']}>
          <Link to="/">Trending Products</Link>
        </li>
        <li className={classes['List--item']}>
          <Link to="/">Shipping & return policy</Link>
        </li>
        <li className={classes['List--item']}>
          <Link to="/">contact US</Link>
        </li>
        <li className={classes['List--item']}>
          <Link to="/">F.A.Q.s</Link>
        </li>
      </List>
      <List>
        <h1 className={classes.title}>Special Offer</h1>
        <li className={classes['List--item']}>
          <Link to="/">Trending Products</Link>
        </li>
        <li className={classes['List--item']}>
          <Link to="/">Fearured</Link>
        </li>
        <li className={classes['List--item']}>
          <Link to="/">Men's Collections</Link>
        </li>
        <li className={classes['List--item']}>
          <Link to="/">Top Products</Link>
        </li>
      </List>
    </ContainerGrid>
  );
};

export default FooterLists;
