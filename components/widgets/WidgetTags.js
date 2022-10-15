import { Link } from 'react-router-dom';
import WidgetContainer from './WidgetContiner';
import classes from './widgetTags.module.scss';

const WidgetTags = props => {
  return (
    <WidgetContainer>
      <h3>{props.sectionTitle}</h3>
      <div className={classes.list}>
        {props.Tags.map(tag => (
          <Link key={tag.id} className={classes.tag} to={tag.link}>
            {tag.title}
          </Link>
        ))}
      </div>
    </WidgetContainer>
  );
};

export default WidgetTags;
