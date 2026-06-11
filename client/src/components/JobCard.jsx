import { Link, useNavigate } from "react-router-dom";

function JobCard({ job, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (confirmDelete) {
      onDelete(job._id);
    }
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Type:</strong> {job.jobType}
      </p>

      <p>
        <strong>Salary:</strong> ₹{job.salary}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
          flexWrap: "wrap"
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() =>
            navigate(`/job/${job._id}`)
          }
        >
          View
        </button>

        <button
          className="btn btn-success"
          onClick={() =>
            navigate(`/edit-job/${job._id}`)
          }
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate(
              `/applications/${job._id}`
            )
          }
        >
          Applications
        </button>
      </div>
    </div>
  );
}

export default JobCard;