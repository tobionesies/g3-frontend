import { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

/*   async function fetCHData(){
      const data = await fetch("http://localhost:3000/api/user/")
      const det = await data.json()
      console.log(det)
    
  }

  fetCHData() */

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(file);
        setImageURL(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Image Upload Component</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <h3>Preview:</h3>
          <img src={imageURL} alt="Preview" width="200" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
