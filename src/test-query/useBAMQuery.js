import { useState } from "react";

export const useBAMQuery = ({ queryFn }) => {
  const [result, setResult] = useState({
    isFetching: false,
    data: undefined,
  });

  const refetch = async () => {
    setResult({ ...result, isFetching: true });
    const newData = await queryFn();
    setResult({
      data: newData,
      isFetching: false,
    });
  };

  Object.assign(result, { refetch });
  return result;
};
