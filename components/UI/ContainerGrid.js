const ContainerGrid = props => {
  const classes = props.className + " container-grid";
  return <div className={classes}>{props.children}</div>;
};

export default ContainerGrid;
