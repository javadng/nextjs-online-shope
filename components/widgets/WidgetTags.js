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
            <span className={classes.tag}>{tag.title}</span>
          </Link>
        ))}
      </div>
    </WidgetContainer>
  );
};

export default WidgetTags;
