import React,{useState} from "react";
import SideNav from "./sidenav";
import Chat from "./chatcontent";
import "./home.scss";

const Home = () => {
  
  const [usermessage,setusermessage]=useState("")
  const callback=(respfromcallback)=>{
      // window.val=respfromcallback
      
     setusermessage(respfromcallback)
  }
  // console.log(usermessage);
  return (
    <div className="homeRow">
      <div className="homeCol">
        <SideNav userlastmesage={usermessage} />
      </div>
      <div className="homeCol">
        <Chat userlastmessage={callback} />
      </div>
    </div>
  );
};

export default Home;
