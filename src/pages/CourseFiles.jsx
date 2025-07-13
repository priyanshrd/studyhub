import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CourseFiles() {
  const { department, courseCode } = useParams();
  const [fileList, setFileList] = useState([]);
  const [topics, setTopics] = useState([]);
  const [checked, setChecked] = useState({});

  useEffect(() => {
    // List all files from public/materials/{department}/{courseCode}
    const folderPath = `/materials/${department}/${courseCode}`;
    fetch(folderPath)
      .then(() => {
        // Client can't list local folder directly
        // Use checklist to show known files
      })
      .catch((err) => console.error("Fetch error:", err));

    // Load topics JSON
    const topicJsonPath = `/materials/${department}/${courseCode}/topics.json`;
    fetch(topicJsonPath)
      .then(res => {
        if (!res.ok) throw new Error("Checklist file not found");
        return res.json();
      })
      .then(data => {
        setTopics(data);
        const stored = localStorage.getItem(`${department}_${courseCode}_checks`);
        setChecked(stored ? JSON.parse(stored) : {});
      })
      .catch(err => {
        console.error("Checklist fetch error:", err);
        setTopics([]);
      });
  }, [department, courseCode]);

  const toggleCheck = (topic) => {
    const updated = { ...checked, [topic]: !checked[topic] };
    setChecked(updated);
    localStorage.setItem(`${department}_${courseCode}_checks`, JSON.stringify(updated));
  };

  const renderFileLink = (fileName) => {
    const url = `/materials/${department}/${courseCode}/${fileName}`;
    const ext = fileName.split('.').pop().toLowerCase();

    return (
      <li key={fileName}>
        {['pdf', 'ppt', 'pptx', 'doc', 'docx'].includes(ext) ? (
          <a href={url} target="_blank" rel="noreferrer">{fileName}</a>
        ) : (
          <a href={url} download>{fileName}</a>
        )}
      </li>
    );
  };

  return (
    <div className="container">
      <h2>{courseCode} Topics</h2>
      {topics.length === 0 ? (
        <p>No checklist found.</p>
      ) : (
        <ul className="checklist">
          {topics.map((item, idx) => (
            <li key={idx} className="checklist-item">
              <label>
                <input
                  type="checkbox"
                  checked={!!checked[item.topic]}
                  onChange={() => toggleCheck(item.topic)}
                />
                <strong>{item.topic}</strong>
              </label>
              {item.files.length > 0 && (
                <ul className="file-links">
                  {item.files.map(renderFileLink)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
