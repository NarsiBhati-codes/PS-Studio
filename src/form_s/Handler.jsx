// Function to set token in localStorage after successful login
const handleLogin = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to remove token from localStorage on logout
  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  
  export { handleLogin, handleLogout };
  