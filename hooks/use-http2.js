import { useCallback, useReducer } from 'react';

const initialState = {
  status: null,
  error: null,
  data: null,
};

const reducerFunc = (state, action) => {
  if (action.type === 'SUCCESS') {
    return {
      status: 'SUCCESS',
      error: null,
      data: action.responseData,
    };
  }

  if (action.type === 'SEND') {
    return {
      status: 'LOADING',
      error: null,
      data: action.responseData,
    };
  }

  if (action.type === 'ERROR') {
    return {
      status: 'ERROR',
      error: action.errorMessage,
      data: null,
    };
  }

  return initialState;
};

const useHttp = requestFunc => {
  const [httpState, dispatch] = useReducer(reducerFunc, initialState);

  const sendRequest = useCallback(
    async reqData => {
      dispatch({ type: 'SEND' });

      try {
        const responseData = await requestFunc(reqData);

        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Somting went wrong',
        });
      }
    },
    [requestFunc]
  );

  return [sendRequest, httpState];
};

export default useHttp;
