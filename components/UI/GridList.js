const GridList = props => {
  const customClassName = `gridlist ${props.className || ""}`;
  return (
    <div id={props.id} className={customClassName}>
      {props.children}
    </div>
  );
};

export default GridList;
