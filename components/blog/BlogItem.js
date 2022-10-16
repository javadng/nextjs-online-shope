import classes from "./BlogItem.module.scss";
import Link from "next/link";

const BlogItem = props => {
  return (
    <div className={classes.blogitem}>
      <div className={classes.blogitem__date}>
        <span className={classes.day}>{props.date.day}</span>
        <span className={classes.month}>{props.date.month}</span>
      </div>
      <div className={classes.blogitem__desc}>
        <span className={classes.blogitem__cat}>{props.categories}</span>
        <h2 className={classes.blogitem__title}>{props.title}</h2>
        <Link to={`/blog/${props.id}`} className={classes.blogitem__btn}>
          Read more
        </Link>
      </div>
    </div>
  );
};
export default BlogItem;
