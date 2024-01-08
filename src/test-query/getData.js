const shouldCreateNewData = false;

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value: shouldCreateNewData ? Math.random() : 1 });
    }, 500);
  });
};
