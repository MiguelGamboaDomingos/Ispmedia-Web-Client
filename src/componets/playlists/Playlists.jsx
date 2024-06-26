import Playlist from "./playlist/Playlist";
import "./playlists.scss";

const Playlists = () => {
  // TEMPORARY
  const playlists = [
    {
      id: 1,
      name: "Minha Playlist",
      userId: 1,
      profilePic: "profilePicUrl1",
      desc: "Minha playlist favorita",
      thumbnail: "thumbnailUrl1",
      tracks: 10,
      ratings: [
        { userId: 1, rating: 4 },
        { userId: 2, rating: 3 },
        { userId: 3, rating: 5 },
      ],
    },
    {
      id: 2,
      name: "Playlist do Jesus",
      userId: 2,
      profilePic: "profilePicUrl2",
      desc: "Playlist do meu irmão",
      thumbnail: "thumbnailUrl2",
      tracks: 20,
      ratings: [
        { userId: 1, rating: 2 },
        { userId: 3, rating: 4 },
      ],
    },
    {
      id: 3,
      name: "Playlist da Z Edu",
      userId: 1,
      profilePic: "profilePicUrl1",
      desc: "Playlist da minha escola",
      thumbnail: "thumbnailUrl3",
      tracks: 30,
      ratings: [
        { userId: 2, rating: 5 },
        { userId: 3, rating: 4 },
      ],
    },
    {
      id: 4,
      name: "Playlist da Z Edu",
      userId: 1,
      profilePic: "profilePicUrl1",
      desc: "Playlist da minha escola",
      thumbnail: "thumbnailUrl3",
      tracks: 30,
      ratings: [
        { userId: 2, rating: 5 },
        { userId: 3, rating: 4 },
      ],
    },
    //...
  ];

  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlists;