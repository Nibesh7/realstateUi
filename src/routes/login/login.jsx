import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const {updateUser} = useContext(AuthContext)
  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError("")
    const formData = new FormData(e.target);
    const username = formData.get("username")
    // const email = formData.get("email")
    const password = formData.get("password")

    try {
      const res =  await apiRequest.post("/auth/login",{
        username, password
      })
      // console.log(res)
      // localStorage.setItem('user', JSON.stringify(res.data))
      //using Conext Api to update data 
      updateUser(res.data)
      navigate("/")
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={login}>
          <h1>Welcome back</h1>
          <input name="username" type="text" required placeholder="Username" />
          <input name="password" type="password" placeholder="Password" required />
          <button disabled={isLoading}>Login</button>
          {error && <sapn>{error}</sapn>}

          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
