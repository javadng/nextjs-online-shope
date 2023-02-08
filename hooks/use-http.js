import { useCallback, useState } from "react";

const useHttp = () => {
  const [httpState, setHttpState] = useState({
    message: null,
    status: null,
    data: null,
  });

  const sendRequest = useCallback(
    async (urlpath, options) => {
      try {
        setHttpState({
          message: "Sending request",
          status: "LOADING",
          data: null,
          error: null,
        });

        const response = await fetch(urlpath, options ? options : null);

        if (!response.ok)
          throw new Error(`${response.status}.${response.statusText}.`);

        const result = await response.json();

        if (result.errors) {
          const errMessage = result.errors.map(el => el.message).join(".");
          throw new Error(`Error💥: ${errMessage}`);
        }

        if (result.data) {
          setHttpState({
            message: result.message || "success",
            status: "SUCCESS",
            data: result.data,
            error: null,
          });
        }
      } catch (error) {
        setHttpState({
          message: error.message || "Somthing went wrong.",
          status: "ERROR",
          data: null,
        });
      }
    },
    [setHttpState]
  );

  return { sendRequest, httpState };
};

export default useHttp;
