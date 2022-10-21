import Link from "next/link";
import WidgetContainer from "./WidgetContiner";
import classes from "./WidgetLinks.module.scss";

const WidgetLinks = props => {
  return (
    <WidgetContainer>
      <h3 className={classes.title}>{props.sectionTitle}</h3>
      <ul className={classes.list}>
        {props.items.map(item => (
          <li key={item.id} className={classes.item}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </WidgetContainer>
  );
};

export default WidgetLinks;
