import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      }, { withCredentials: true });

      setMessage(res.data.msg); // Backend should return msg like "User registered successfully"
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error registering user");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /><br/>

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

        <button>Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Register;
