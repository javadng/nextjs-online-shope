import { Fragment, useState } from "react";
import LoadingSpinner from "../../UI/spinners/LoadingSpinner";
import classes from "./search.module.scss";

const Search = props => {
  const [inputValue, setInputValue] = useState("");
  const [requestStatus, setRequestStatus] = useState("");

  const onChangeInputHanlder = e => {
    setInputValue(e.target.value);
  };

  const searchHandler = async e => {
    e.preventDefault();

    if (inputValue.trim().length <= 3) return;

    setRequestStatus("LOADING");
    await fetch(`/api/${inputValue}`)
      .then(res => res.json())
      .then(data => {
        setRequestStatus("SUCCESS");
        console.log(data);
      })
      .catch(err => {
        setRequestStatus("ERROR");
        console.log(err.message);
      });
  };

  return (
    <Fragment>
      {requestStatus === "LOADING" && (
        <LoadingSpinner className={classes.spinner} />
      )}
      <form onSubmit={searchHandler}>
        <input
          type="search"
          placeholder="ProductName..."
          value={inputValue}
          onChange={onChangeInputHanlder}
        />
      </form>
    </Fragment>
  );
};

export default Search;
