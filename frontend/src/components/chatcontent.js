import React, { useEffect, useState,useRef } from "react";
import { withRouter } from "react-router-dom";
import "./chat.scss";
import { Avatar, Button, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";



const Chat = (props) => {
  const [Apidata, setApidata] = useState("");
  const [dummy,setdummy]=useState("")
  const [state, setstate] = useState({
    userMessage: "",
    userName: "",
    userEmail: "",
  });
  const scrollref=useRef(null)
  

  useEffect(() => {
    if (
      sessionStorage.getItem("email") === null ||
      sessionStorage.getItem("email") === undefined
    ) {
      props.history.push("/");
    } else {
      fetch("https://whatsappbasicclone.herokuapp.com/messages")
        .then((resp) => resp.json())
        .then((data) => setApidata(data));

      setstate({
        ...state,
        userEmail: JSON.parse(sessionStorage.getItem("email")),
        userName: JSON.parse(sessionStorage.getItem("name")),
      });
      

      if(scrollref){
        scrollref.current.addEventListener('DOMNodeInserted', event => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
      }
    
    }
  }, []);
  

useEffect(()=>{

  
  fetch("https://whatsappbasicclone.herokuapp.com/messages")
  .then((resp) => resp.json())
  .then((data) => setApidata(data));

  setdummy(
    ""
  )
    

},[dummy])


  const usermessageHandler = (e) => {
    setstate({
      ...state,
      userMessage: e.target.value,
    });
  };

  const sendmessagehandler = async () => {
    await fetch("https://whatsappbasicclone.herokuapp.com/addmessages", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    setstate({
      ...state,
      userMessage: "",
    });
    setdummy(
      "some"
    )
  };

  

  let loggedinUserEmail = JSON.parse(sessionStorage.getItem("email"));
  const renderMessages = () => {
    if (Apidata) {
      if (Apidata.length > 0) {
        return Apidata.map((data) => {
          sessionStorage.setItem("mess",data.userMessage)
          props.userlastmessage(data.userMessage)
          return (
            <div
            
              key={data._id}
              className={`${
                data.userEmail === loggedinUserEmail
                  ? "sendergrp chat_contentCol"
                  : "receivergrp chat_contentCol"
              }`}
            >
              <div
              
                className={`${
                  data.userEmail === loggedinUserEmail
                    ? "senderdiv"
                    : "receiverdiv"
                }`}
              >
                <div className="sendermessage receivermessage">
                <p className={`${
                    data.userEmail === loggedinUserEmail
                      ? "sendermessage element0"
                      : "receivermessage element1"
                  }`}><strong>{data.userName}</strong></p>
                <p
                
                  className={`${
                    data.userEmail === loggedinUserEmail
                      ? "sendermessage element2"
                      : "receivermessage element2"
                  }`}
                >
                  {data.userMessage}
                </p>
                </div>
              </div>
            </div>
          );
        });
      }
    }
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    props.history.push("/");
  };

 

  return (
    <div className="chat">
      <div className="chatHeaderRow">
        <div className="chatHeaderCol">
          <Avatar
            style={{ marginLeft: "20px" }}
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
        </div>
        <div className="chatHeaderCol">
          <h3>Global Chat</h3>
        </div>
        <div className="chatHeaderCol icongrp">
          <Button onClick={logoutHandler} className="logout">
            Logout
          </Button>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <SearchIcon className="searchicon" />
          </IconButton>
        </div>
      </div>
      <div ref={scrollref} className="chat_contentRow">{renderMessages()}</div>
      <div className="chatFooterRow">
        <div className="chatFooterCol">
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <input
            placeholder="type a message"
            onChange={usermessageHandler}
            className="sendinput"
            value={state.userMessage}
          />
          <IconButton onClick={sendmessagehandler} className="">
            <button className="sendbutton">Send</button>
          </IconButton>
          <IconButton className="mic">
            <MicNoneOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Chat);
