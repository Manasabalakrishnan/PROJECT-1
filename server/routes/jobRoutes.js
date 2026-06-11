const express = require("express");
const router = express.Router();

const Job = require("../models/Job");
const Application = require("../models/Application");

router.get("/", async (req, res) => {
  try {
    const { search, jobType } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } }
      ];
    }

    if (jobType) {
      query.jobType = jobType;
    }

    const jobs = await Job.find(query);

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(job);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    await Application.deleteMany({
      jobId: req.params.id
    });

    res.json({
      message: "Job Deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.post("/:id/apply", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const application =
      await Application.create({
        jobId: req.params.id,
        name,
        email,
        phone
      });

    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

router.get("/:id/applications", async (req, res) => {
  try {
    const applications =
      await Application.find({
        jobId: req.params.id
      });

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;