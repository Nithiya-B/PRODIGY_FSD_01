import { useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.user) {
        onLoginSuccess(res.data.user);
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (err) {
      console.log(err);
    }
  };
}



