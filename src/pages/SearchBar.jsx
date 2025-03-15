import { useState } from "react";

function SearchBar({ setJobs }) {
  const [jobTitle, setJobTitle] = useState("");

  const handleSearch = async () => {
    if (!jobTitle.trim()) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/search_jobs/?job_title=${jobTitle}`
      );
      const data = await response.json();

      setJobs(data); // Update job list in the parent component
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Enter job title..."
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
