import { useParams, Link } from 'react-router-dom';
import courseList from '../utils/courseList';

export default function Department() {
  const { department } = useParams();
  const courses = courseList[department] || [];

  return (
    <div className="container">
      <h2>{department} Courses</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.code}>
            <Link to={`/${department}/${course.code}`}>
              {course.code} — {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
