import "./navBar.scss"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const NavBarComponent = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currUser} = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
            <span>ISPMedia</span>
            </Link>
            <HomeRoundedIcon/>
            <div className="search">
            <SearchRoundedIcon/>
            <input type="text" placeholder="Search..." />
            </div>
        </div>
        <div className="right">
        {darkMode ? <DarkModeRoundedIcon onClick={toggle}/>:<WbSunnyRoundedIcon onClick={toggle}/> }
          <NotificationsRoundedIcon/>
          <AccountCircleRoundedIcon/>
          <div className="user">
            <img src={currUser.profilePic}/>
            <span>{currUser.name}</span>
          </div>
        </div>
        
    </div>
  )
}

export default NavBarComponent