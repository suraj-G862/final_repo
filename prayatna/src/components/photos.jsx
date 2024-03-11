// import React, { useState } from 'react';
import "./styles/photos.css";

const photos = [
  {
    id: 1,
    src: "/Images/1.jpg",
  },
  {
    id: 2,
    src: "/Images/2.jpg",
  },
  // Add more photos here...
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562307534-a03738d2a81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

function PhotosGallery() {
  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          {/* <Zoom> */}
            <img
              src={photo.src}
              alt=""
              style={{ width: "100%", height: "100%", cursor: "zoom-in" }}
            />
          {/* </Zoom> */}
        </div>
      ))}
    </div>
  );
}

export default PhotosGallery;
