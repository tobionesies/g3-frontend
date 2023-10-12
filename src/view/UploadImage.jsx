import { useState } from "react";
import { useAppContext } from "../auth";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const { state } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('category',category)
    formData.append('text',text)
    formData.append('image',image)
    formData.append('user_id', state.credential.credentials.userId)
    
    const res = await fetch(
      "http://localhost:3000/api/post",
      {
        method: "POST",
        headers: {
          authorization: state.credential.credentials.token,
        },
        body:formData
      }
    );

    if(res.ok){
      alert('post successfully created!!')
    }else{
      console.log(res)
      alert('ops something went wrong!!')
    }
  }; //end of handleSubmit

  const handleDrop = (e) => {
    e.preventDefault();

    let file = e.dataTransfer.files[0];

    if (file && file.type.match(/^image\//)) {
      const reader = new FileReader();

      reader.onload = function (evt) {
        setImage(evt.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Invalid file type. Please upload an image.");
    }
  };

  const handleChange = (e) => {
    let file = e.target.files[0];

    if (file && file.type.match(/^image\//)) {
      const reader = new FileReader();

      reader.onload = function (evt) {
        setImage(evt.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Invalid file type. Please upload an image.");
    }
  };

  return (
    <div style={styles.container}>
      <form
        style={styles.formContainer}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div style={styles.textContainer}>
          <input
            type="text"
            style={{ width: "100%", height: "30px" }}
            placeholder="category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            required
          />
        </div>
        <div style={styles.imageContainer}>
          {image ? (
            <img src={image} alt="Uploaded" style={styles.uploadedImage} />
          ) : (
            <span>
              Drag & Drop or{" "}
              <label htmlFor="file-upload" style={{ color: "blue" }}>
                Upload
              </label>{" "}
              an Image
            </span>
          )}
          <input
            id="file-upload"
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </div>

        <div style={styles.textContainer}>
          <textarea
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={styles.textContainer}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  formContainer: {
    width: "400px",
    border: "2px solid #ccc",
    padding: "20px",
    textAlign: "center",
    borderRadius: "5px",
  },
  imageContainer: {
    marginBottom: "20px",
    border: "2px dashed #ccc",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadedImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textContainer: {
    width: "100%",
    height: "100px",
  },
};

export default UploadImage;
