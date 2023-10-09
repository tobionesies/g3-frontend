import { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [userId, setUserId] = useState('anjnfla');
  const [category, setCategory] = useState('images');

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

  const handleUpload = async () => {
      if (!image) {
        alert('Please select an image first.');
        return;
      }
  
      const formData = new FormData();
      formData.append('user_id', userId);
      formData.append('category', category);
      formData.append('image_name', 'photo');
      formData.append('text','I am your doctor');
      formData.append('image', image);  // 'image' field will contain the actual file
  
      try {
        const response = await fetch('http://localhost:3000/api/post', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Image successfully uploaded:', data);
        } else {
          console.log('Failed to upload image:', response);
        }
      } catch (error) {
        console.error('An error occurred while uploading the image:', error);
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
      <button onClick={handleUpload} >Upload</button>
    </div>
  );
};

export default ImageUpload;
