import classes from "./BlogItem.module.scss";
import Link from "next/link";

const BlogItem = props => {
  return (
    <div className={classes.blogitem}>
      <div className={classes.blogitem__date}>
        <span className={classes.month}>{props.date}</span>
        <span className={classes.month}>{props.year}</span>
      </div>
      <div className={classes.blogitem__desc}>
        <span className={classes.blogitem__cat}>{props.categories}</span>
        <h2 className={classes.blogitem__title}>{props.title}</h2>
        <Link href={`/blog/${props.id}`}>
          <span className={classes.blogitem__btn}>Read more</span>
        </Link>
      </div>
    </div>
  );
};
export default BlogItem;
