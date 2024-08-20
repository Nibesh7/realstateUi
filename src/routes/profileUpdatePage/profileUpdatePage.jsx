import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import {useNavigate} from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/uploadWidget";
function ProfileUpdatePage() {
  const {currentUser, updateUser} = useContext(AuthContext)
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate()
  const updateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const  {username, email, password, } = Object.fromEntries(formData);
    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`,{
        username,
        email,
        password,
        avatar: avatar[0]

      });
      updateUser(res.data)
      navigate("/profile")
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }

  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={updateProfile}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}

            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" className="avatar" />

        <UploadWidget
          uwConfig={{
            cloudName: "nibesh-ranjit",
            uploadPreset: "realState",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />

      </div>
    </div>
  );
}

export default ProfileUpdatePage;
