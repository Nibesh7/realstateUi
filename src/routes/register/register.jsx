import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      const createUser =  await axios.post("http://localhost:8800/api/auth/register",{
        username, email, password
      })
      navigate('/login')
      console.log(createUser.data)
    } catch (error) {
        setError(error.response.data.message)
      console.log(error)
    }
  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={registerUser}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
            {error && <sapn>{error}</sapn>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
