import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  const [application, setApplication] =
    useState({
      name: "",
      email: "",
      phone: ""
    });

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    const response = await fetch(
      `http://localhost:5000/api/jobs/${id}`
    );

    const data = await response.json();

    setJob(data);
  };

  const handleChange = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value
    });
  };

  const applyJob = async (e) => {
    e.preventDefault();

    const emailRegex =
      /\S+@\S+\.\S+/;

    if (
      !emailRegex.test(application.email)
    ) {
      return alert("Invalid Email");
    }

    if (
      application.phone.length < 10
    ) {
      return alert(
        "Invalid Phone Number"
      );
    }

    const response = await fetch(
      `http://localhost:5000/api/jobs/${id}/apply`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(application)
      }
    );

    if (response.ok) {
      setMessage(
        "Application Submitted Successfully"
      );

      setApplication({
        name: "",
        email: "",
        phone: ""
      });
    }
  };

  if (!job) {
    return (
      <h2 className="loading">
        Loading...
      </h2>
    );
  }

  return (
    <div className="container">
      <div className="job-card">
        <h2>{job.title}</h2>

        <p>
          <strong>Company:</strong>{" "}
          {job.company}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {job.location}
        </p>

        <p>
          <strong>Type:</strong>{" "}
          {job.jobType}
        </p>

        <p>
          <strong>Salary:</strong> ₹
          {job.salary}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{job.description}</p>
      </div>

      <div
        className="form-container"
        style={{
          marginTop: "20px"
        }}
      >
        <h2>Apply For Job</h2>

        {message && (
          <p
            style={{
              color: "green",
              marginBottom: "10px"
            }}
          >
            {message}
          </p>
        )}

        <form onSubmit={applyJob}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={application.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={application.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={application.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="btn btn-primary"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobDetails;