import React, { useState } from 'react';
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(""); // Estado para armazenar a URL do media
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar se o player está reproduzindo

  // Função para lidar com o clique no botão de reprodução
  const handlePlayClick = (mediaUrl) => {
    // Se já houver um player reproduzindo, pausa o player anterior antes de reproduzir o novo
    if (isPlaying) {
      setMediaUrl("");
      setIsPlaying(false);
      // Define a URL do novo media no estado
      setTimeout(() => {
        setMediaUrl(mediaUrl);
        setIsPlaying(true);
      }, 300); // Um pequeno atraso para garantir que o player anterior seja pausado antes de iniciar o novo
    } else {
      // Define a URL do media no estado
      setMediaUrl(mediaUrl);
      setIsPlaying(true);
    }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <div className="media-container">
            {/* Aqui adicionamos o evento onClick para reproduzir o media */}
            <img className="media" src={post.img} alt="" onClick={() => handlePlayClick(post.mediaUrl)} />
          </div>
          <div className="info">
            <div className="item">
              <PlayArrowIcon />{post.plays}
            </div>
            <div className="item">
              {post.type === "audio" ? (
                <LibraryMusicRoundedIcon />
              ) : (
                <VideoLibraryRoundedIcon />
              )}
              {post.duration}   
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon />
              12 Críticas
            </div>
          </div>
        </div>
      </div>
      {/* Aqui você pode renderizar o player com base na URL do media */}
      {mediaUrl && (
        <div className="player">
          {/* Aqui você pode renderizar o player de vídeo ou música com base na URL do media */}
          {post.type === "audio" ? (
            <audio controls src={mediaUrl} autoPlay />
          ) : (
            <video controls src={mediaUrl} autoPlay />
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
