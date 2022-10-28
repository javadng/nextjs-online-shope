import Image from "next/image";
import Link from "next/link";
import classes from "./BlogItem.module.scss";

const BlogItem = props => {
  const btnClasses = `${classes.blog__btn} btn`;

  return (
    <div className={classes.blog}>
      <figure className={classes.figureImg}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image layout="fill" src={props.image} alt="blog" />
        </div>
        <div className={classes["meta--time"]}>
          <span className={classes.date}>
            <em>{props.date}</em>
          </span>
          <span className={classes.year}>{props.year}</span>
        </div>
      </figure>
      <header>
        <h2 className={classes.title}>
          <Link href={`/blog/${props.id}`}>{props.title}</Link>
        </h2>
      </header>
      <article>
        <p>{props.desc}</p>
      </article>
      <footer>
        <Link href={`/blog/${props.id}`}>
          <a className={btnClasses}>READ more</a>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
