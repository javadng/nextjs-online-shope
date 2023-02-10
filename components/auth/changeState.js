const ChangeState = props => {
  const { isLogin, setIsLogin } = props.state;
  const description = isLogin ? `Don't have an account?` : "I have a account.";
  const logStateContent = isLogin ? "Signup" : "Log in";

  return (
    <span className="sub-title">
      {description}
      <span className="span-onclick" onClick={() => setIsLogin(prev => !prev)}>
        {logStateContent}
      </span>
    </span>
  );
};

export default ChangeState;
