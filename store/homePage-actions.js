import { getBlogsHome } from '../lib/getBlogsHome';
import { getProductList } from '../lib/getProducts';
import { blogHomeActions } from './blogHome-slice';
import { productActions } from './products-slice';
import { uiActions } from './ui-slice';

export const getHomePageData = () => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'LOADING',
        title: 'isLoading...',
        message: 'data is loading',
      })
    );

    try {
      const productsData = await getProductList();

      const blogHome = await getBlogsHome();

      Promise.all([productsData, blogHome]).then(values => {
        dispatch(productActions.replaceItems(values[0]));
        dispatch(blogHomeActions.replaceBlogHome(values[1]));
      });

      dispatch(
        uiActions.showNotification({
          status: 'SUCCESS',
          title: 'success',
          message: 'data is recieved',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'ERROR',
          title: 'Error',
          message: err.message,
        })
      );
    }
  };
};
