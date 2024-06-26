import Post from "./post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic: "profilePicUrl1",
      desc: "Éramos felizes e não sabiamos",
      mediaUrl: "mediaUrl1",
      img: "imgUrl1",
      duration: "2:05",
      type: "video",
      plays: 100,
      rating: 4.5, // adicionado rating
    },
    {
      id: 2,
      name: "Jesus Cristo",
      userId: 2,
      profilePic: "profilePicUrl2",
      desc: "Obrigado @designa_designer",
      mediaUrl: "mediaUrl2",
      img: "imgUrl2",
      duration: "31:42",
      type: "video",
      plays: 100,
      rating: 4.2, // adicionado rating
    },
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic: "profilePicUrl1",
      desc: "Éramos felizes e não sabiamos",
      mediaUrl: "mediaUrl3",
      img: "imgUrl1",
      duration: "3:45",
      type: "audio",
      plays: 1230,
      rating: 4.8, // adicionado rating
    },
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic: "profilePicUrl1",
      desc: "Éramos felizes e não sabiamos",
      mediaUrl: "mediaUrl4",
      img: "imgUrl3",
      duration: "3:45",
      type: "audio",
      plays: 100,
      rating: 4.1, // adicionado rating
    },
    {
      id: 2,
      name: "Jesus Cristo",
      userId: 2,
      profilePic: "profilePicUrl2",
      desc: "Se eu fosse negro... hahaha",
      mediaUrl: "mediaUrl5",
      img: "imgUrl4",
      duration: "3:45",
      type: "audio",
      plays: 100,
      rating: 4.6, // adicionado rating
    },
  ];

  // calcular média de rating
  const averageRating = posts.reduce((acc, post) => acc + post.rating, 0) / posts.length;

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
     
    </div>
  );
};
export default Posts;
