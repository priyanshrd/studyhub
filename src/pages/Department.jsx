// === src/pages/Department.jsx ===
import { useParams, Link } from 'react-router-dom';
import courseList from '../utils/courseList';
import './Department.css';

export default function Department() {
  const { department } = useParams();
  const courses = courseList[department] || [];

  return (
    <div className="dept-container">
      <h2 className="dept-title">{department} Courses</h2>
      <ul className="course-grid">
        {courses.map((course) => (
          <li key={course.code} className="course-card">
            <Link to={`/${department}/${course.code}`}>
              <h3>{course.code}</h3>
              <p>{course.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
