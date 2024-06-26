
import { useState } from 'react';
import Posts from "../../componets/posts/Posts";
import Playlists from "../../componets/playlists/Playlists";
import Friends from "../../componets/friends/Friends";
import "./profile.scss"
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';



const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
          
                <span>Bio Lorem ipsum</span>
              </div>
            </div>
            <div className="buttons">
              <PersonAddRoundedIcon className="icon"/>
              
            </div>
          </div>

         
        </div>
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "Tudo" ? "active" : ""}`}
            onClick={() => handleTabClick("Tudo")}
          >
            Tudo
          </button>
          <button
            className={`tab-btn ${activeTab === "Posts" ? "active" : ""}`}
            onClick={() => handleTabClick("Posts")}
          >
            Posts
          </button>
          <button
            className={`tab-btn ${activeTab === "Playlists" ? "active" : ""}`}
            onClick={() => handleTabClick("Playlists")}
          >
            Playlists
          </button>
          <button
            className={`tab-btn ${activeTab === "Amigos" ? "active" : ""}`}
            onClick={() => handleTabClick("Amigos")}
          >
            Amigos
          </button>
          
        </div>
        {activeTab === "Posts" && <Posts />}
        {activeTab === "Playlists" && <Playlists />}
        {activeTab === "Amigos" && <Friends />}
        {activeTab === "Tudo" && <Posts /> }
       
      </div>
    </div>
  );
};

export default ProfileScreen;