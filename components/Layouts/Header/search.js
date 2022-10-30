import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import classes from "./search.module.scss";
import { FiSearch } from "react-icons/fi";

const Search = props => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const onChangeInputHanlder = e => {
    setInputValue(e.target.value);
  };

  const searchHandler = async e => {
    e.preventDefault();

    if (inputValue.trim().length <= 3) return;

    router.push(`/search/${inputValue}`);

    setInputValue("");
  };

  return (
    <Fragment>
      <div className={classes["search-box"]}>
        <form onSubmit={searchHandler}>
          <button className={classes["btn-search"]}>
            <FiSearch />
          </button>
          <input
            value={inputValue}
            onChange={onChangeInputHanlder}
            type="text"
            className={classes["input-search"]}
            placeholder="Type to Search..."
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
