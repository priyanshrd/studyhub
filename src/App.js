import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Department from './pages/Department';
import CourseFiles from './pages/CourseFiles';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:department" element={<Department />} />
          <Route path="/:department/:courseCode" element={<CourseFiles />} />

          </Routes>
      </>
    </Router>
  );
}


export default App;
