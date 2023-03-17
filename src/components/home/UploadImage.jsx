import React, { useState } from 'react';

function UploadImage() {
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    fetch('http://127.0.0.1:8001/api', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }


  // The function sets the file state variable by calling the setFile function with the selected file. event.target refers to the <input> element that triggered the event, and event.target.files is an array of files selected by the user. Since we are only allowing the user to select one file at a time, we use [0] to get the first (and only) file in the array.
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadImage;