import Post from "../../componets/Posts/Posts"
import Recomended from "../../componets/Recomended/Recomended"
import "./home.scss"

const HomeScreen = () => {
  return (
    <div className="home">
      <Recomended/>
      <Post/>
    </div>
  )
}

export default HomeScreen