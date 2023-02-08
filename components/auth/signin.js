import { useState } from "react";
import { useCookies } from "react-cookie";
import useHttp from "../../hooks/use-http";
import classes from "./auth.module.scss";

/* 
https://codedamn.com/news/nextjs/next-js-cookie
*/

// const WP_COOKIE_NAME = "wordpress_logged_in_d7a0a7d670a130eea74d9e2b098f6dd7";
const WP_COOKIE_NAME = "wordpress_d7a0a7d670a130eea74d9e2b098f6dd7";

const SignIn = props => {
  const setCookie = useCookies()[1];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { httpState, sendRequest } = useHttp();
  const usernameChange = e => setUsername(e.target.value);
  const passwordChange = e => setPassword(e.target.value);

  const submitHandler = async e => {
    e.preventDefault();

    const query = `
        mutation LoginUser($input: LoginInput = {password: "${password}", username: "${username}"}) {
          login(input: $input) {
            user {
              email
              username
              jwtAuthToken
              jwtAuthExpiration
            }
          }
        }
    `;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    sendRequest("http://localhost:10011/graphql", options);

    const { data, error } = httpState;

    if (!error && data.login) {
      console.log(data);
      const user = data.login.user;
      // const cookie = `${user.username}|${user.jwtAuthExpiration}|${user.jwtAuthToken}`;
      setCookie("users", user, { maxAge: user.jwtAuthExpiration });
    } else {
      console.log(error);
    }
  };

  return (
    <form autoComplete="off" onSubmit={submitHandler} className={classes.auth}>
      <div className={classes.auth__row}>
        <input
          onChange={usernameChange}
          id="username"
          placeholder=" "
          className={classes.input}
          type="text"
        />
        <label htmlFor="username" className={classes.label}>
          USERNAME
        </label>
      </div>
      <div className={classes.auth__row}>
        <input
          onChange={passwordChange}
          className={classes.input}
          placeholder=" "
          id="password"
          type="password"
        />
        <label className={classes.label} htmlFor="password">
          PASSWORD
        </label>
      </div>
      <button className={classes.btn} type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
