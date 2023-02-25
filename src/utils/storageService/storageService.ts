export const set = (username: string) => {
  localStorage.setItem('user', JSON.stringify({ username }));
};

export const get = () => localStorage.getItem('user');

export const clear = () => {
  localStorage.removeItem('user');
};
