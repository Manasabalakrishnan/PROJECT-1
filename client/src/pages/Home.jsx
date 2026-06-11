import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchFilter from "../components/SearchFilter";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");

  const fetchJobs = async () => {
    try {
      setLoading(true);

      let url = "http://localhost:5000/api/jobs?";

      if (search) {
        url += `search=${search}&`;
      }

      if (jobType) {
        url += `jobType=${jobType}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setJobs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [search, jobType]);

  const deleteJob = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/jobs/${id}`,
        {
          method: "DELETE"
        }
      );

      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <h2 className="loading">
        Loading Jobs...
      </h2>
    );
  }

  return (
    <div className="container">
      <h1>Available Jobs</h1>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        jobType={jobType}
        setJobType={setJobType}
      />

      {jobs.length === 0 ? (
        <h3
          style={{
            marginTop: "20px"
          }}
        >
          No Jobs Found
        </h3>
      ) : (
        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onDelete={deleteJob}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;