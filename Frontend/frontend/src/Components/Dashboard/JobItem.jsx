export default function JobItem({ job, onEdit, onDelete }) {
  return (
    <div className="job-item">
      <h3>{job.jobTitle} at {job.company}</h3>
      <p>Date: {new Date(job.applicationDate).toLocaleDateString()}</p>
      <p>Status: {job.status}</p>
      <p>Notes: {job.notes}</p>
      <div className="job-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={() => onDelete(job._id)}>Delete</button>
      </div>
    </div>
  );
}
