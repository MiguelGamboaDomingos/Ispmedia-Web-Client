import "./sideBar.scss"
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

const SideBarComponent = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="item">
          <span>Sugestões para ti</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Miguel Domingos</span>
            </div>
            <div className="buttons">
              <PersonAddRoundedIcon className="icon"/>
              <DisabledByDefaultRoundedIcon  className="icon"/>
            </div>
          </div>
          
        </div>
        <div className="item">
          <span>Ultimas actividades</span>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p><span>Miguel Domingos</span> Adicionou um novo vídeo
              </p>
            </div>
            <span>há 1h</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Catia Adão</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Phunga Aguinaldo</span>
            </div>
          </div>   
          
          
        </div>
      </div>
    </div>
    
  )
}

export default SideBarComponent