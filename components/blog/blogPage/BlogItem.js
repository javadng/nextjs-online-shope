import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import classes from "./BlogItem.module.scss";
import formatDate from "../../../lib/formatDate";

const BlogItem = props => {
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formatedDate = formatDate(props.date, options);

  const btnClasses = `${classes.blog__btn} btn`;
  const content = parse(props.content);

  const paragraph = content.find(item => item.type === "p");
  const figure = content.find(item => item.type === "figure");
  const imgeElem = figure.props.children;

  return (
    <div className={classes.blog}>
      <figure className={classes.figureImg}>
        {imgeElem}
        <div className={classes["meta--time"]}>
          <span className={classes.date}>
            <em>{formatedDate}</em>
          </span>
        </div>
      </figure>
      <header>
        <h2 className={classes.title}>
          <Link href={props.uri}>{props.title}</Link>
        </h2>
      </header>
      <article>{paragraph}</article>
      <footer>
        <Link href={props.uri}>
          <span className={btnClasses}>READ more</span>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;

/*


*/
