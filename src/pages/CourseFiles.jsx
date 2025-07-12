import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CourseFiles() {
  const { department, courseCode } = useParams();
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetch(`/materials/${department}/${courseCode}/manifest.json`)
      .then((res) => res.json())
      .then(setFiles)
      .catch((err) => {
        console.error("Failed to load manifest:", err);
      });
  }, [department, courseCode]);

  const renderPreview = (fileName) => {
    const fileUrl = `/materials/${department}/${courseCode}/${fileName}`;
    const ext = fileName.split('.').pop().toLowerCase();

    if (ext === 'pdf') {
      return (
        <iframe
          src={fileUrl}
          title={fileName}
          width="100%"
          height="600px"
          style={{ border: '1px solid #ccc', marginTop: '20px' }}
        />
      );
    }

    if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
      return (
        <img
          src={fileUrl}
          alt={fileName}
          style={{ maxWidth: '100%', marginTop: '20px' }}
        />
      );
    }

    return (
      <p style={{ marginTop: '20px' }}>
        <a href={fileUrl} target="_blank" rel="noreferrer">
          Download: {fileName}
        </a>
      </p>
    );
  };

  return (
    <div className="container">
      <h2>{courseCode} Files</h2>
      <ul className="file-list">
        {files.map((file) => (
          <li key={file}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#007bff',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedFile(file)}
            >
              {file}
            </button>
          </li>
        ))}
      </ul>

      {selectedFile && (
        <div className="file-preview">
          <h3>Preview: {selectedFile}</h3>
          {renderPreview(selectedFile)}
        </div>
      )}
    </div>
  );
}
