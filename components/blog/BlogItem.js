import classes from "./BlogItem.module.scss";
import Link from "next/link";
import formatDate from "../../lib/formatDate";

const BlogItem = props => {
  const options = {
    day: "2-digit",
    month: "short",
  };
  const formatedDate = formatDate(props.date, options);
  const [month, day] = formatedDate.split(" ");

  return (
    <div className={classes.blogitem}>
      <div className={classes.blogitem__date}>
        <span className={classes.month}>{day}</span>
        <span className={classes.month}>{month}</span>
      </div>
      <div className={classes.blogitem__desc}>
        <span className={classes.blogitem__cat}>{props.categories}</span>
        <h2 className={classes.blogitem__title}>{props.title}</h2>
        <Link href={props.uri}>
          <span className={classes.blogitem__btn}>Read more</span>
        </Link>
      </div>
    </div>
  );
};
export default BlogItem;
