const isAuthenticated = () => {
  const item1 = localStorage.getItem("user");
  const item2 = localStorage.getItem("userPass");

  return Boolean(item1) && Boolean(item2);
};

export default isAuthenticated;
