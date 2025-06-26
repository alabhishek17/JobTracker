export default function JobForm({ newJob, setNewJob, editId, handleAdd, handleEdit }) {
  return (
    <div className="job-form">
      <input placeholder="Job Title" value={newJob.jobTitle}
        onChange={(e) => setNewJob({ ...newJob, jobTitle: e.target.value })} />
      <input placeholder="Company" value={newJob.company}
        onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
      <input type="date" value={newJob.applicationDate}
        onChange={(e) => setNewJob({ ...newJob, applicationDate: e.target.value })} />
      <select value={newJob.status}
        onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input placeholder="Notes" value={newJob.notes}
        onChange={(e) => setNewJob({ ...newJob, notes: e.target.value })} />
      <button onClick={editId ? handleEdit : handleAdd}>
        {editId ? "Save Changes" : "Add Job"}
      </button>
    </div>
  );
}
