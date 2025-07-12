// generate-manifests.js
const fs = require('fs');
const path = require('path');

const baseDir = './public/materials';

function walkCourses(department) {
  const deptPath = path.join(baseDir, department);
  const courses = fs.readdirSync(deptPath);

  courses.forEach(course => {
    const coursePath = path.join(deptPath, course);
    if (fs.lstatSync(coursePath).isDirectory()) {
      const files = fs.readdirSync(coursePath).filter(f => f !== 'manifest.json');
      fs.writeFileSync(
        path.join(coursePath, 'manifest.json'),
        JSON.stringify(files, null, 2)
      );
      console.log(`✔️  Manifest created for ${department}/${course}`);
    }
  });
}

['CSE', 'ECE'].forEach(walkCourses);
