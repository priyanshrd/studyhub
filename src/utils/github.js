import axios from 'axios';

// ✅ Set these to your actual GitHub repo details
const GITHUB_OWNER = "priyanshrd";
const REPO = "EndSemHelper";
const BRANCH = "main"; // or "master" depending on your default branch

export const fetchFilesInFolder = async (path) => {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`;
  try {
    const res = await axios.get(url);
    // Ensure we only return actual files (not folders)
    return res.data.filter(file => file.type === "file");
  } catch (err) {
    console.error("GitHub fetch failed", err.response?.data?.message || err.message);
    return [];
  }
};
