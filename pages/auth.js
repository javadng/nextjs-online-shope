import SignIn from "../components/auth/signin";
import { getCookie } from "cookies-next";
import SignUp from "../components/auth/signup";

const AuthPage = props => {
  const session = props.userSession;
  return <SignUp />;
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
