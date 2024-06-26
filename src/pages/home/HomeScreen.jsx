import Posts from "../../componets/Posts/Posts"
import Recomended from "../../componets/Recomended/Recomended"
import "./home.scss"

const HomeScreen = () => {
  return (
    <div className="home">
      <p>Recomendações</p>
      <Recomended/>
      <p>Feed</p>
      <Posts/>
    </div>
  )
}

export default HomeScreen