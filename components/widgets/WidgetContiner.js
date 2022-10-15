import classes from './WidgetContainer.module.scss';

const WidgetContainer = props => {
  return <div className={classes.widgetContainer}>{props.children}</div>;
};

export default WidgetContainer;
