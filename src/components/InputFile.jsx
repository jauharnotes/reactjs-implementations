import { useState } from "react";

export default function InputFile() {
    const [selectedImage, setSelectedImage] = useState(null);
    // const [loading, setLoading] = useState();

    const handleSelectedImage = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const handleRemoveImage = () => {
        setSelectedImage(null)
    }


  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>handleRemoveImage()}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={handleSelectedImage.bind()}
      />
    </div>
  );
}
