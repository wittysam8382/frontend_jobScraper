import { useState } from "react";
import SearchBar from "./pages/SearchBar";
import JobList from "./pages/JobList"

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">Job Scraper</h1>
      <SearchBar setJobs={setJobs} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
