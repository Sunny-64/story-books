export const getLocalItem = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setLocalItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
