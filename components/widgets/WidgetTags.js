import Link from "next/link";
import WidgetContainer from "./WidgetContiner";
import classes from "./widgetTags.module.scss";

const WidgetTags = props => {
  return (
    <WidgetContainer>
      <h3>{props.sectionTitle}</h3>
      <div className={classes.list}>
        {props.Tags.map(tag => (
          <Link key={tag.id} href={tag.link}>
            <a className={classes.tag}>{tag.title}</a>
          </Link>
        ))}
      </div>
    </WidgetContainer>
  );
};

export default WidgetTags;
