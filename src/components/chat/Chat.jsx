import { useContext, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import {format} from "timeago.js";
function Chat({chats}) {
  const [chat, setChat] = useState(null);
  const {currentUser} = useContext(AuthContext)
  const handleOpenChat = async (id, receiver) => {
    console.log('handle')
    try {

      const response = await apiRequest("/chats/"+ id);
      setChat({...response.data, receiver})
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get('text')
    if(!text) return '';
    try {
      const res = await apiRequest.post("/messages/" + chat.id, {text})
      console.log(res);
      setChat((prev) => ({ ...prev, messages:[...prev.messages, res.data]}))
      e.target.reset();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {
          chats.map((c) => 
            <div className="message" key={c.id} 
              style={{ backgroundColor: c.seenBy.includes(currentUser.id) ? 'white' :  'yellow'}}
              onClick={() => handleOpenChat(c.id, c.receiver)}
            > 
              <img
                src={c.receiver.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
                alt=""
              />
              <span>{c.receiver.username}</span>
              <p>{c.lastMessage}</p>
            </div>
          )
        }
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={chat.receiver.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt=""
              />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            {chat.messages.map((msg) => {
              return <div className="chatMessage own" style={{ 
                alignSelf: msg.userId === currentUser.id ? "flex-end": "flex-start",
                textAlign: msg.userId === currentUser.id ? "right": "left",
                }} key={msg.id}>
                <p>{msg.text}</p>
                <span>{format(msg.createdAt)}</span>
              </div>
            })}
          </div>
        
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
