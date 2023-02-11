import SignIn from "../components/auth/signin";
import { getCookie } from "cookies-next";
import SignUp from "../components/auth/signup";
import { Fragment, useState } from "react";
import ChangeState from "../components/auth/changeState";

const AuthPage = props => {
  const [isLogin, setIsLogin] = useState(true);
  const session = props.userSession;
  return (
    <Fragment>
      {isLogin && <SignIn />}
      {!isLogin && <SignUp />}
      <ChangeState state={{ isLogin, setIsLogin }} />
    </Fragment>
  );
  // return <SignIn />;
};

export default AuthPage;

export async function getServerSideProps({ req, res }) {
  const userCookie = getCookie("users", { req, res });
  const userSession = JSON.parse(userCookie);

  return {
    props: {
      userSession,
    },
  };
}
