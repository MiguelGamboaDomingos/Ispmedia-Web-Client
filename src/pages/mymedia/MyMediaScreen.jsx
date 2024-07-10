// src/screens/MyMediaScreen.js
import React, { useState } from 'react';
import './mymedia.scss';
import MediaContainer from '../../componets/media/MediaContainer';

const MyMediaScreen = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    duration: '',
    type: 'audio',
    cover: null,
  });

  const userMedia = [
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
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleUploadClick = () => {
    setShowUploadForm(!showUploadForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o servidor
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    
    fetch('/upload-endpoint', {
      method: 'POST',
      body: formDataToSend,
    }).then(response => response.json())
      .then(data => {
        // Lógica para lidar com a resposta do servidor
        console.log(data);
        // Fechar o formulário após o envio
        setShowUploadForm(false);
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <div className='my-media'>
      <div className="topBar">
        <button onClick={handleUploadClick}>Upload</button>
      </div>
     
      {showUploadForm && (
        <div className="uploadForm">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="title" 
              placeholder="Title" 
              value={formData.title} 
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="authors" 
              placeholder="Authors" 
              value={formData.authors} 
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="duration" 
              placeholder="Duration" 
              value={formData.duration} 
              onChange={handleInputChange} 
            />
            <select 
              name="type" 
              value={formData.type} 
              onChange={handleInputChange}>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
            <input 
              type="file" 
              name="cover" 
              onChange={handleInputChange} 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
     
      <MediaContainer userMedia={userMedia} />
      <p>jsdjfjds</p>
    </div>
  );
};

export default MyMediaScreen;
