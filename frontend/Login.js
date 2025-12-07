import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      }, { withCredentials: true });

      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        <button>Login</button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default Login;
