# 📚 RVCE StudyHub — 6th Semester CSE & ECE

This is a centralized platform for RVCE 6th semester **CSE** and **ECE** students to easily access and track important subject-wise study material.

Materials include:
- PDFs
- Images
- PPTs
- YouTube/blog links

You can browse all material by department and subject, and mark your progress using the checklist.

---

## 🗂 Directory Structure

```yaml
public/
└── materials/
└── CSE/
└── CS363IA/
├── topics.json
├── <your files>
└── ECE/
└── <subject_code>/
```

Each subject folder must contain:
- Study material files
- A `topics.json` file listing topics and the files linked to each

---

## ✅ How to Upload Study Material

### Option 1: For Contributors

If you have access to this GitHub repository:

1. Navigate to the correct folder inside `public/materials/DEPARTMENT/SUBJECT_CODE/`.
2. Upload your files (`.pdf`, `.pptx`, `.jpg`, etc.)
3. Update `topics.json` to map the files to their respective topics.

Example `topics.json`:
```json
[
  {
    "topic": "1.1 Introduction to Compiler Design",
    "files": ["Unit1_Intro.pdf", "compiler_structure.png"]
  },
  {
    "topic": "1.2 Lexical Analysis",
    "files": []
  },
  {
    "topic": "3.1 Intermediate Code Generation",
    "files": ["https://youtu.be/xyz123"]
  }
]
```
Commit and push the changes — the website will automatically reflect them once I add the config files.

### Option 2: For Everyone Else (No GitHub access)

You can just send your material to me and I’ll upload it:

    📧 Email: priyansh17rd@gmail.com

    📱 WhatsApp: WhatsApp me if we know each other personally

Please include:

- Subject code & department

- Files (or links)

- Topics each file covers

## Notes

    This project is student-built and maintained.

    The website does not require editing React code for adding files.

    Built with ❤️ to help everyone prepare better and faster.