import Button from "../UI/Button";

import classes from "./AboutUs.module.scss";
import OurOptions from "./OurOptions";
import Container from "../UI/Container";

const AboutUs = props => {
  return (
    <Container className={classes.about}>
      <div className={classes.about__top}>
        <h1 className={classes.about__title}>About Us</h1>
        <span className={classes.about__subtitle}>amazing online Shop</span>
        <p className={classes.about__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.repellendus
          optio nobis ad quod.
        </p>
        <p className={classes.about__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda
          officia tempora a accusamus rem repellendus optio nobis ad quod.
        </p>
        <Button className={`${classes.about__btn} btn-animated`}>
          read more
        </Button>
      </div>
      <div className={classes.about__bottom}>
        <OurOptions
          title="Free shipping"
          subTitle="Free for all over order $100"
        />
        <OurOptions
          title="Gift Cards"
          subTitle="Free for all over order $100"
        />
        <OurOptions title="Friendly Support" subTitle="Serices support 24/07" />
      </div>
    </Container>
  );
};

export default AboutUs;
