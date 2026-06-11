import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import JobDetails from "./pages/JobDetails";
import Applications from "./pages/Applications";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/add-job"
          element={<AddJob />}
        />

        <Route
          path="/edit-job/:id"
          element={<EditJob />}
        />

        <Route
          path="/job/:id"
          element={<JobDetails />}
        />

        <Route
          path="/applications/:id"
          element={<Applications />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;