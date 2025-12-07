import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // ...registration logic

    if (res.data.msg === "User registered successfully") {
      navigate("/login"); // Redirect to login after registering
    }
  };
}



