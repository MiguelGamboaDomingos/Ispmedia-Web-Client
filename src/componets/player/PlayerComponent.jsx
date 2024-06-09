import React from "react";
import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";

const PlayerComponent = ({ post }) => {
  // Lógica para reprodução do media
  const [isPlaying, setIsPlaying] = useState(false);

  // Lógica para manipulação de curtidas
  const [liked, setLiked] = useState(false);

  // Função para alternar estado de curtida
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="player-overlay">
      <div className="player-container">
        {/* Reprodutor de Mídia (Vídeo ou Áudio) */}
        {post.type === "audio" ? (
          <audio controls autoPlay>
            <source src={post.mediaUrl} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        ) : (
          <video controls autoPlay>
            <source src={post.mediaUrl} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}

        {/* Descrição do Post */}
        <div className="description">
          <h2>{post.desc}</h2>
          <p>Uploaded by: {post.name}</p>
        </div>

        {/* Ações (Curtidas, Comentários) */}
        <div className="actions">
          <button onClick={toggleLike}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          </button>
          <button>
            <TextsmsOutlinedIcon />
          </button>
        </div>

        {/* Informações adicionais (Plays, Tipo do Media) */}
        <div className="info">
          <div className="item">
            {post.type === "audio" ? (
              <LibraryMusicRoundedIcon />
            ) : (
              <VideoLibraryRoundedIcon />
            )}
            {post.plays}
          </div>
          <div className="item">{post.type}</div>
        </div>

        {/* Comentários */}
        <div className="comments">
          <h3>Comentários</h3>
          {/* Renderizar os comentários aqui */}
        </div>

        {/* Botão para fechar o player */}
        <button className="close-button">Fechar</button>
      </div>
    </div>
  );
};

export default PlayerComponent;
