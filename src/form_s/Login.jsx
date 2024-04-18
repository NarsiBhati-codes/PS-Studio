import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend.psstudio.co.in/api/login', formData);
      console.log(response.data); // Log the response data
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Error:', error);
      // Handle login error, e.g., show error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="input-field"
        />
        <button type="submit" className="btn-primary">
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
