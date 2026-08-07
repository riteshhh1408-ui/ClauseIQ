import { useRef, useState } from "react";

function UploadBox() {
  const fileInput = useRef();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
  };

  return (
    <div className="upload-box">
      <input
        type="file"
        accept=".pdf"
        ref={fileInput}
        onChange={handleFile}
        hidden
      />

      <button
        className="hero-btn"
        onClick={handleClick}
      >
        Upload PDF
      </button>

      {selectedFile && (
        <div className="file-info">
          <h3>Selected File</h3>
          <p>📄 {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
}

export default UploadBox;