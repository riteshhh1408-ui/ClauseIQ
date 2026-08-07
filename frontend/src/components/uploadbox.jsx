import { useRef, useState } from "react";

function UploadBox() {
  const fileInput = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setUploadStatus("Uploading...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      setUploadStatus("✅ Upload Successful");
    } catch (error) {
      console.error(error);
      setUploadStatus("❌ Upload Failed");
    }
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
          <p>{uploadStatus}</p>
        </div>
      )}
    </div>
  );
}

export default UploadBox;