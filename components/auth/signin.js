import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import classes from "./auth.module.scss";
import parseHtml from "html-react-parser";

const query = gql`
  mutation LoginUser($input: LoginInput!) {
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

const SignIn = props => {
  const setCookie = useCookies()[1];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, loading, error }] = useMutation(query);

  const usernameChange = e => setUsername(e.target.value);
  const passwordChange = e => setPassword(e.target.value);

  useEffect(() => {
    if (!error && data?.login) {
      const { user } = data.login;
      const userCookie = {
        email: user.email,
        jwtAuthExpiration: user.jwtAuthExpiration,
        jwtAuthToken: user.jwtAuthToken,
        username: user.username,
      };

      setCookie("users", userCookie, { maxAge: user.jwtAuthExpiration });
    }
  }, [error, data, setCookie]);

  const submitHandler = async e => {
    e.preventDefault();

    const LoginInput = {
      username,
      password,
    };

    try {
      await login({
        variables: { input: LoginInput },
      });
    } catch (err) {
      console.error(err.message);
    }

    // const cookie = `${user.username}|${user.jwtAuthExpiration}|${user.jwtAuthToken}`;
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
      {error && (
        <span className={classes.auth__error}>{parseHtml(error.message)}</span>
      )}
    </form>
  );
};

export default SignIn;
