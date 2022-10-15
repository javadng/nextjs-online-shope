import { Link } from 'react-router-dom';
import WidgetContainer from './WidgetContiner';
import classes from './WidgetLinks.module.scss';

const WidgetLinks = props => {
  return (
    <WidgetContainer>
      <h3>{props.sectionTitle}</h3>
      <ul className={classes.list}>
        {props.items.map(item => (
          <li key={item.id} className={classes.item}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </WidgetContainer>
  );
};

export default WidgetLinks;
