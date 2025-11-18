import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router";

export default function JobCard({ job }) {
  return (

      <div className="group w-full max-w-sm rounded-md p-4 h-full flex flex-col border border-gray-200 bg-[#F8FAFF] hover:bg-white hover:border-blue-300 transition-transform duration-300 hover:-translate-y-0.5">



        <div className="space-y-3 flex flex-col h-full p-2">

          {/* Company Info */}
          <div className="flex items-center gap-3">
            <img
              src={job.company_logo}
              alt="logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{job.company}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} /> {job.location}
              </p>
            </div>
          </div>

          {/* Job Title */}
          <h2 className="text-xl font-bold">{job.title}</h2>

          {/* Job Type */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {job.jobType}
            </span>
            <span>Deadline: {job.applicationDeadline}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((req, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-gray-100 rounded-full shadow-sm"
              >
                {req}
              </span>
            ))}
          </div>


          {/* Salary + Button */}
          <div className="flex items-center justify-between pt-2 mt-auto">

            <p className="text-base text-blue-600">
              {job.salaryRange.min}-{job.salaryRange.max} BDT
            </p>

            <Link to={`/jobs/${job._id}`}>
            <button className="rounded-md btn bg-base-200 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-700 ease-in-out">Apply</button>
            </Link>
          </div>

        </div>


      </div>
  );
}