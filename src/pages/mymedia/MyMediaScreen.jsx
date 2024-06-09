import './mymedia.scss'
import MediaContainer from '../../componets/media/MediaContainer';

const MyMediaScreen = () => {
  // Sample user media data
  const userMedia = [
    // Sample media objects
    {
      id: 1,
      title: "Sample Media 1",
      authors: ["Author 1", "Author 2"],
      duration: "3:30",
      type: "audio",
      cover: "https://images.genius.com/d3f96ffc7aa598172ac67d73098fa667.300x300x1.jpg"
    },
    {
      id: 2,
      title: "Sample Media jxjnxlkanlaksdnalskdnlkmdaslkdnasldk2",
      authors: ["Author 3"],
      duration: "5:00",
      type: "video",
      cover: ""
    },
    // Add more media objects as needed
  ];

  return (
    <div className='my-media'>
      <div className="topBar">
        <button> Upload</button>
      </div>
     
      <MediaContainer userMedia={userMedia} />
      <p>jsdjfjds</p>
    </div>
  );
};

export default MyMediaScreen;
