import { Fragment } from "react";
import SectionTitle from "../../components/UI/SectionTitle";
import ContactList from "../../components/contact/ContactList";

const ContactPage = props => {
  return (
    <Fragment>
      <SectionTitle
        title="contact us"
        subtitle="have any questions ? We'd love to hear from you"
      />
      <ContactList />
    </Fragment>
  );
};

export default ContactPage;
