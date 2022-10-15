import WidgetLinks from '../../widgets/WidgetLinks';
import WidgetTags from '../../widgets/WidgetTags';
import classes from './sidebar.module.scss';

const DUMMY__LINKS = [
  {
    id: 'l1',
    title: 'All products',
    link: '/home',
  },
  {
    id: 'l2',
    title: 'New products',
    link: '/home',
  },
  {
    id: 'l3',
    title: 'Top Offers',
    link: '/home',
  },
  {
    id: 'l4',
    title: 'All products',
    link: '/home',
  },
  {
    id: 'l6',
    title: 'All products',
    link: '/home',
  },
];

const DUMMY__Tags = [
  {
    id: 't1',
    link: '/home',
    title: 'Samsumg S21',
  },
  {
    id: 't2',
    link: '/home',
    title: 'Top Products',
  },
  {
    id: 't3',
    link: '/home',
    title: 'Image',
  },
  {
    id: 't4',
    link: '/home',
    title: 'Red Scarf',
  },
];

const SideBar = props => {
  const classNames = `${classes.side} ${props.className}`;
  return (
    <div className={classNames}>
      <WidgetLinks sectionTitle="Related Product" items={DUMMY__LINKS} />
      <WidgetTags sectionTitle="Tags" Tags={DUMMY__Tags} />
      <WidgetLinks items={DUMMY__LINKS} />
    </div>
  );
};

export default SideBar;
