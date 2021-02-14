import React,{useEffect} from "react";
import ChatIcon from "@material-ui/icons/Chat";
import "./sidenav.scss";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
const SideNav = (props) => {


  return (
    <div className="sidenav">
      <div className="sidenav_header">
        <div className="profilegrp col">
          <Avatar src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
        <div className="iconsgrp col">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton >
            <MoreVertIcon  />
          </IconButton>

        </div>
      </div>
      <div className="searchChats">
        <input className="searchbar" placeholder="search or start new chat" />
        <SearchIcon className="searchicon" />
      </div>

      <div className="ProfileGrpRow">
        <div className="ProfileGrpCol">
          <Avatar style={{height:"50px",width:"50px"}} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
        <div className="ProfileGrpCol usergrp">
          <h3>Global Chat</h3>
  <p>{props.userlastmesage}</p>
        </div>
      </div>
      
    </div>
  );
};

export default SideNav;
