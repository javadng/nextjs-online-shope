import ContactCart from './ContactCart';
import classes from './ContactList.module.scss';

const ContactList = props => {
  return (
    <div className={classes.contactList}>
      <ContactCart
        title="sales"
        desc="Get in touch with our sales team to see how we can work together."
        btnText="contact sales"
      />
      <ContactCart
        isCentered={true}
        title="help & support"
        desc="Our support team is spread across the globe to give you answers fast"
        btnText="visit support Page"
      />
      <ContactCart
        title="press"
        desc="Are you interested in our latest news or working on a  Grammarly story an need to get in touch ?s"
        btnText="visit press Page"
      />
    </div>
  );
};

export default ContactList;
