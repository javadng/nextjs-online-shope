import classes from './SectionTitle.module.scss';

const SectionTitle = props => {
  const customClassName = `${classes.container} ${props.className || ''}`;
  return (
    <section className={customClassName}>
      <h1 className={classes.title}>{props.title}</h1>
      <span className={classes.subtitle}>{props.subtitle}</span>
    </section>
  );
};

export default SectionTitle;
