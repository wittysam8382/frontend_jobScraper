function JobList({ jobs }) {
  return (
    <div className="p-4">
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow-md my-2">
            <h2 className="text-xl font-bold">{job.job_title}</h2>
            <p className="text-gray-600">
              {job.company_name} - {job.location}
            </p>
            <a
              href={job.application_link}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default JobList;
