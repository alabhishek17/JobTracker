import { useState, useEffect } from "react";
import axios from "axios";
import JobForm from "./JobForm";
import JobList from "./JobList";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ jobTitle: "", company: "", applicationDate: "", status: "Applied", notes: "" });
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    const res = await axios.get("http://localhost:10000/applications", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setJobs(res.data);
  }

  async function handleAdd() {
    await axios.post("http://localhost:10000/applications", newJob, {
      headers: { Authorization: `Bearer ${token}` },
    });
    resetForm();
    fetchJobs();
  }

  async function handleEdit() {
    await axios.put(`http://localhost:10000/applications/${editId}`, newJob, {
      headers: { Authorization: `Bearer ${token}` },
    });
    resetForm();
    fetchJobs();
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:10000/applications/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchJobs();
  }

  function resetForm() {
    setEditId(null);
    setNewJob({ jobTitle: "", company: "", applicationDate: "", status: "Applied", notes: "" });
  }

  return (
    <div className="dashboard">
      <h2>My Job Applications</h2>
      <JobForm
        newJob={newJob}
        setNewJob={setNewJob}
        editId={editId}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      <JobList jobs={jobs} onEdit={setEditId} onEditData={setNewJob} onDelete={handleDelete} />
    </div>
  );
}
