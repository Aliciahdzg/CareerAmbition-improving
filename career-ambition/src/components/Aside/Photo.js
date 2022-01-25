import React, { useState } from "react";
import './Photo.scss';

const Photo = () => {

    const [selectedImage, setSelectedImage] = useState(null);

  return ( 
    <div>
    {selectedImage && (
      <div className="img-profile">
      <img alt="not fount" className="profile" src={URL.createObjectURL(selectedImage)} />
      {/*<br />
      <button className="btn-delete-photo" onClick={()=>setSelectedImage(null)}>x</button>*/}
      </div>
    )}
  
   
      <label for="fichero" className="circle">Add photo</label>
      <input type="file" id="fichero" onChange={(event) => {setSelectedImage(event.target.files[0]); }}/>
  </div>
  );
};

export default Photo;
