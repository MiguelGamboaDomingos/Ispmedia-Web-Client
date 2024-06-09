import Post from "./post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic:
        "https://static.dw.com/image/36850805_605.jpg",
      desc: "Éramos felizes e não sabiamos",
      mediaUrl: "../../../../assets/audio/06. Má Escolha Tua Ft Folley.mp3",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jos%C3%A9_Eduardo_dos_Santos_3.jpg/800px-Jos%C3%A9_Eduardo_dos_Santos_3.jpg",
      duration: "2:05",
      type: "video",
      plays: 100,
    },
    {
      id: 2,
      name: "Jesus Cristo",
      userId: 2,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/11/17/22/18/jesus-christ-7599018_1280.jpg",
      desc: " Obrigado @designa_designer",
      mediaUrl: "../../../../assets/audio/03. Mil Paranóias.mp3",
      img: "https://static.vecteezy.com/ti/fotos-gratis/p2/24401816-a-sofrimentos-do-jesus-cristo-dentro-a-coroa-do-espinhos-ai-gerativ-gratis-foto.jpg",
      duration: "31:42",
      type: "video",
      plays: 100,
    },
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic:
        "https://static.dw.com/image/36850805_605.jpg",
      desc: "Éramos felizes e não sabiamos",
      mediaUrl: "../../../../assets/audio/01. Monopólio.mp3",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jos%C3%A9_Eduardo_dos_Santos_3.jpg/800px-Jos%C3%A9_Eduardo_dos_Santos_3.jpg",
      duration: "3:45",
      type: "audio",
      plays: 1230,
    },
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic:
        "https://static.dw.com/image/36850805_605.jpg",
      desc: "Éramos felizes e não sabiamos",
      mediaUrl: "url_do_media_1",
      img: "https://angola24horas.com/media/k2/items/cache/2724589a0296d57a34f27db2a39130dd_XL.jpg",
      duration: "3:45",
      type: "audio",
      plays: 100,
    },
    {
      id: 2,
      name: "Jesus Cristo",
      userId: 2,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/11/17/22/18/jesus-christ-7599018_1280.jpg",
      desc: "Se eu fosse negro... hahaha",
      mediaUrl: "url_do_media_1",
      img: "data:image/jpeg;base64,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",
      duration: "3:45",
      type: "audio",
      plays: 100,
    },
    {
      id: 1,
      name: "Z  Edu",
      userId: 1,
      profilePic:
        "https://static.dw.com/image/36850805_605.jpg",
      desc: "Éramos felizes e não sabiamos",
      media: { src: 'media1.mp3', type: 'audio', autor:{nome:"Miguel"} },
      img: "https://f.i.uol.com.br/fotografia/2017/11/22/15113668715a15a0d7ede02_1511366871_3x2_rt.jpg",
      duration: "3:45",
      plays: 100,
    },
    {
      id: 2,
      name: "Jesus Cristo",
      userId: 2,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/11/17/22/18/jesus-christ-7599018_1280.jpg",
      desc: "Novo milagre a caminho. ",
      mediaUrl: "../../../../assets/video/Check marks in square shape green screen animated video by @pixxeledge _ Royalty Free.mp4",
      img: "https://sonie.com.br/wp-content/uploads/2024/04/OIG1-6-3.jpg",
      duration: "3:45",
      type: "video",
      plays: 100,
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
