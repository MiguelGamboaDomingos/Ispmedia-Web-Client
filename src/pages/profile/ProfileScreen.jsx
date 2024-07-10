import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from "../../componets/posts/Posts";
import Playlists from "../../componeTs/playlists/Playlists";
import Friends from "../../componets/friends/Friends";
import "./profile.scss";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import useProfile from '../../hooks/useProfile'; // Importando o hook para buscar o perfil

const ProfileScreen = () => {
  const { id } = useParams();
  const { profile, loading, error } = useProfile(id);
  const [activeTab, setActiveTab] = useState("Tudo");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Verificação de carregamento ou erro
  if (loading) return <div>Carregando perfil...</div>;
  if (error) return <div>Erro ao carregar perfil. Tente novamente mais tarde.</div>;

  return (
    <div className="profile">
      <div className="images">
        <img
          src={profile.cover || 'https://via.placeholder.com/1260x750.png?text=Cover'}
          alt=""
          className="cover"
        />
        <img
          src={profile.profilePic || 'https://via.placeholder.com/1600x900.png?text=Profile+Pic'}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>{profile.fullName}</span>
            <div className="info">
              <div className="item">
                <span>{profile.bio}</span>
              </div>
            </div>
            <div className="buttons">
              <PersonAddRoundedIcon className="icon"/>
              {/* Aqui podem ser adicionados outros botões de ação */}
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
        {activeTab === "Tudo" && (
          <>
            <Posts />
            <Playlists />
            <Friends />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
