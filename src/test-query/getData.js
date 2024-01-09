const shouldCreateNewData = true;

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value: shouldCreateNewData ? Math.random() : 1,
        user: { name: "John" },
      });
    }, 500);
  });
};
