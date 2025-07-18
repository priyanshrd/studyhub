
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseFiles.css';

export default function CourseFiles() {
  const { department, courseCode } = useParams();
  const [topics, setTopics] = useState([]);
  const [checked, setChecked] = useState({});

  useEffect(() => {
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

    if (ext === 'pdf') {
      return (
        <li key={fileName}>
          <a href={url} target="_blank" rel="noreferrer">{fileName}</a>
        </li>
      );
    }
    if (ext === 'rtf') {
      return (
        <li key={fileName}>
          <a href={url} target="_blank" rel="noreferrer">
            {fileName} (Download RTF)
          </a>
        </li>
      );
}

    if (['ppt', 'pptx', 'doc', 'docx', 'xls', 'xlsx'].includes(ext)) {
      const officeViewerURL = `https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${url}`;
      return (
        <li key={fileName}>
          <a href={officeViewerURL} target="_blank" rel="noreferrer">
            {fileName} (Preview)
          </a>
        </li>
      );
    }



    return (
      <li key={fileName}>
        <a href={url} target="_blank" rel="noreferrer">{fileName}</a>
      </li>
    );
  };

  return (
    <div className="course-container">
      <h2>{courseCode} Topics</h2>
      {topics.length === 0 ? (
        <p className="no-checklist">No checklist found.</p>
      ) : (
        <ul className="topic-checklist">
          {topics.map((item, idx) => (
            <li key={idx} className={`checklist-item ${checked[item.topic] ? 'checked' : ''}`}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={!!checked[item.topic]}
                  onChange={() => toggleCheck(item.topic)}
                />
                <span>{item.topic}</span>
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
