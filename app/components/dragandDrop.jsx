"use client";
// DragAndDropInput.jsx
import { useState } from 'react';

function DragAndDropInput() {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    readFile(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Do something with the file content
      console.log(event.target.result);
    };
    reader.readAsText(file); // You can change readAsText to other methods based on your file type
    setFile(file);
  };

  return (
    <div
      className="drag-drop-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>Drag & drop a file here</p>
      {file && (
        <div>
          <p>File Name: {file.name}</p>
          <p>File Size: {file.size} bytes</p>
          <p>File Type: {file.type}</p>
        </div>
      )}
    </div>
  );
}

export default DragAndDropInput;
