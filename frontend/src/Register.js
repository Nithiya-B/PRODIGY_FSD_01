import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Register</button>
      </form>

      {/* Link to Login */}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}


export default Register;


