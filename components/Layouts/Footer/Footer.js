import SocialIcons from '../../UI/SocialIcons';
import classes from './Footer.module.scss';
import FooterLists from './FooterLists';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <FooterLists />
      <SocialIcons />
    </footer>
  );
};

export default Footer;
