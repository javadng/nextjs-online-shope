import { useState } from "react";
import { useCookies } from "react-cookie";
import useHttp from "../../hooks/use-http";
import classes from "./auth.module.scss";

const SignUp = props => {
  const setCookie = useCookies()[1];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { httpState, sendRequest } = useHttp();
  const usernameChange = e => setUsername(e.target.value);
  const passwordChange = e => setPassword(e.target.value);

  const submitHandler = async e => {
    e.preventDefault();
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
          onChange={usernameChange}
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
          onChange={usernameChange}
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
        Sign in
      </button>
    </form>
  );
};

export default SignUp;
