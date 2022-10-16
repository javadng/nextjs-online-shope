const Button = props => {
  const btnClass = `${props.className} btn`;

  return (
    <button onClick={props.onClick} className={btnClass}>
      {props.children}
    </button>
  );
};

export default Button;
