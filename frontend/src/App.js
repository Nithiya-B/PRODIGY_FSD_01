import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("login"); // "login" | "register" | "dashboard"
  const [user, setUser] = useState(null);    // store logged-in user

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setPage("dashboard");
  };

  return (
    <div>
      {page === "login" && (
        <>
          <Login onLoginSuccess={handleLoginSuccess} />
          <p>
            Don't have an account?{" "}
            <button onClick={() => setPage("register")}>Register</button>
          </p>
        </>
      )}

      {page === "register" && (
        <>
          <Register />
          <p>
            Already have an account?{" "}
            <button onClick={() => setPage("login")}>Login</button>
          </p>
        </>
      )}

      {page === "dashboard" && <Dashboard user={user} />}
    </div>
  );
}

export default App;


