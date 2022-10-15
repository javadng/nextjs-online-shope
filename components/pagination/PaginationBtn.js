import Button from '../UI/Button';
import classes from './PaginationBtn.module.scss';

const PaginationBtn = props => {
  return <Button className={classes.pageBtn}>{props.pageNum}</Button>;
};

export default PaginationBtn;
