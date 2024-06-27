import "./leftBar.scss";
import CloudCircleRoundedIcon from '@mui/icons-material/CloudCircleRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import RadioRoundedIcon from '@mui/icons-material/RadioRounded';
import { Link, useLocation } from "react-router-dom";

const LeftBarComponent = () => {
  const location = useLocation();

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <Link
            to={`/mymedia`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/mymedia" ? "active" : ""}`}
            >
              <CloudCircleRoundedIcon className="icon" />
              <span>Meus medias</span>
            </div>
          </Link>
          <hr />
          <Link
            to={`/musics`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/musics" ? "active" : ""}`}
            >
              <LibraryMusicRoundedIcon className="icon" />
              <span>Musicas</span>
            </div>
          </Link>
          <Link
            to={`/videos`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/videos" ? "active" : ""}`}
            >
              <VideoLibraryRoundedIcon className="icon" />
              <span>Videos</span>
            </div>
          </Link>
          <Link
            to={`/playlists`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/playlists" ? "active" : ""}`}
            >
              <SubscriptionsRoundedIcon className="icon" />
              <span>Playlists</span>
            </div>
          </Link>
          <Link
            to={`/radios`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/radios" ? "active" : ""}`}
            >
              <RadioRoundedIcon className="icon" />
              <span>Rádio</span>
            </div>
          </Link>
          <hr />
          <Link
            to={`/friends`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/friends" ? "active" : ""}`}
            >
              <Diversity2RoundedIcon className="icon" />
              <span>Amigos</span>
            </div>
          </Link>
          <Link
            to={`/groups`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className={`item ${location.pathname === "/groups" ? "active" : ""}`}
            >
              <GroupsRoundedIcon className="icon" />
              <span>Grupos</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBarComponent;