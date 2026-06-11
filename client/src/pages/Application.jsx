import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Applications() {
  const { id } = useParams();

  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications =
    async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/jobs/${id}/applications`
        );

        const data =
          await response.json();

        setApplications(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <h2 className="loading">
        Loading Applications...
      </h2>
    );
  }

  return (
    <div className="container">
      <h1>Applications</h1>

      {applications.length === 0 ? (
        <h3>No Applications Found</h3>
      ) : (
        applications.map((app) => (
          <div
            key={app._id}
            className="application-card"
          >
            <h3>{app.name}</h3>

            <p>
              <strong>Email:</strong>{" "}
              {app.email}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {app.phone}
            </p>

            <p>
              <strong>Applied:</strong>{" "}
              {new Date(
                app.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Applications;