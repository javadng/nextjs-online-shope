import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import classes from "./auth.module.scss";
import parseHtml from "html-react-parser";
import { gql, useMutation } from "@apollo/client";

const query = gql`
  mutation registerUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        email
        username
        jwtAuthToken
        jwtAuthExpiration
      }
    }
  }
`;

//https://www.apollographql.com/docs/react/data/mutations/
// https://graphql.org/learn/queries/

const SignUp = props => {
  const setCookie = useCookies()[1];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, { data, loading, error }] = useMutation(query);

  const usernameChange = e => setUsername(e.target.value);
  const passwordChange = e => setPassword(e.target.value);
  const fullNameChange = e => setFullName(e.target.value);
  const emailChange = e => setEmail(e.target.value);

  useEffect(() => {
    if (!error && data?.registerUser) {
      const { user } = data.registerUser;
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
    const RegisterUserInput = {
      username,
      email,
      password,
      firstName: fullName,
    };

    try {
      await signUp({
        variables: { input: RegisterUserInput },
      });
    } catch (err) {
      console.error(err.message);
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
          onChange={fullNameChange}
          id="Full Name"
          placeholder=" "
          className={classes.input}
          type="text"
        />
        <label htmlFor="Full Name" className={classes.label}>
          Full Name
        </label>
      </div>
      <div className={classes.auth__row}>
        <input
          onChange={emailChange}
          id="Email"
          placeholder=" "
          className={classes.input}
          type="text"
        />
        <label htmlFor="Email" className={classes.label}>
          Email
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
        Sign Up
      </button>
      {error && (
        <span className={classes.auth__error}>
          {parseHtml(parseHtml(error.message))}
        </span>
      )}
    </form>
  );
};

export default SignUp;
