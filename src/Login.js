import React, { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {handleLogin} = props;
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
 const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    console.log(email);
    console.log(password);
  }

  return (
    <div style={{ padding: 30 }}>
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <label>
          
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleEmail}
            required
            // ref={node => (this.inputNode = node)}
          />
         
        </label>
        <br />
        <label>
         
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handlePassword}
            required
          />
         
        </label>
       <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
