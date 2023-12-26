const shouldCreateNewData = true;

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shouldCreateNewData ? Math.random() : 1);
    }, 500);
  });
};
