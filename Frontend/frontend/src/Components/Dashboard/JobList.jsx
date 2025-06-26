import JobItem from "./JobItem";

export default function JobList({ jobs, onEdit, onEditData, onDelete }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobItem
          key={job._id}
          job={job}
          onEdit={() => {
            onEdit(job._id);
            onEditData({
              jobTitle: job.jobTitle,
              company: job.company,
              applicationDate: job.applicationDate.slice(0, 10),
              status: job.status,
              notes: job.notes,
            });
          }}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
