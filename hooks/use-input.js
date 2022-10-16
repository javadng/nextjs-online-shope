import { useReducer } from 'react';

const initialState = {
  isTouched: false,
  value: '',
};

const reducerFn = (state, action) => {
  if (action.type === 'CHANGE') {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }

  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }

  return initialState;
};

const useInput = (validateFn = () => true) => {
  const [inputState, dispatchInput] = useReducer(reducerFn, initialState);
  const valueIsValid = validateFn(inputState.value);

  const hasError = !valueIsValid && initialState.isTouched;

  const onChangeHandler = e => {
    dispatchInput({ type: 'CHANGE', value: e.target.value });
  };

  const onBlurHandler = e => {
    dispatchInput({ type: 'BLUR', isTouched: true });
  };

  const RESET = () => {
    dispatchInput({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    error: hasError,
    isValid: valueIsValid,
    RESET,
    onBlurHandler,
    onChangeHandler,
  };
};

export default useInput;
