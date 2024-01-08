import { useState, useRef } from "react";

const useTrackedResult = (initialValues) => {
  const trackedResultKeys = useRef(new Set());
  const result = useRef(initialValues);
  const [trackedResult, setTrackedResult] = useState(() => {
    const result = {};

    Object.keys(initialValues).forEach((key) => {
      Object.defineProperty(result, key, {
        enumerable: true,
        get: () => {
          trackedResultKeys.current.add(key);
          return initialValues[key];
        },
      });
    });

    return result;
  });

  const setResult = (newResult) => {
    const shouldRerender = !!Array.from(trackedResultKeys.current).find(
      (key) => newResult[key] !== result.current[key]
    );

    result.current = newResult;

    if (shouldRerender) {
      const newResult = {};
      Object.entries(result.current).forEach(([key, value]) => {
        Object.assign(newResult, { [key]: value });
      });
      setTrackedResult(newResult);
    }
  };

  return [result.current, trackedResult, setResult];
};

export const useBAMQuery = ({ queryFn }) => {
  const [result, trackedResult, setResult] = useTrackedResult({
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

  Object.assign(trackedResult, { refetch });
  return trackedResult;
};
