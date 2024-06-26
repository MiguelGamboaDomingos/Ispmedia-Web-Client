import Playlists from "../../componets/playlists/Playlists"
import "./playlists.scss"


const PlaylistsScreen = () => {
  return (
    <div className="playlists-container">
      <p>Recomendações</p>
     
      <p>Listas de Reprodução</p>
      <Playlists/>
    </div>
  )
}
export default PlaylistsScreen