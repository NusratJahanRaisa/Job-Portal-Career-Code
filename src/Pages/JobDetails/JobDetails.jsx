import React from 'react';
import { MapPin, Clock, Mail } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

export default function JobDetails() {
  const job = useLoaderData();
  const {
    title,
    location,
    jobType,
    salaryRange,
    applicationDeadline,
    description,
    requirements,
    responsibilities,
    company,
    hr_name,
    hr_email,
    company_logo
  } = job;

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Company Header */}
        <div className="flex items-center gap-4">
          <img src={company_logo} alt="logo" className="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h1 className="text-2xl font-bold text-blue-800">{title}</h1>
            <h2 className="text-lg text-blue-600 font-semibold">{company}</h2>
            <p className="text-sm text-gray-500 flex items-center gap-2"><MapPin size={14} /> {location}</p>
            <p className="text-sm text-gray-500 flex items-center gap-2"><Clock size={14} /> {jobType}</p>
          </div>
        </div>

        {/* Salary & Deadline */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 bg-blue-50 p-4 rounded-md">
          <p className="font-semibold text-blue-700">Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
          <p className="font-semibold text-blue-700">Apply By: {applicationDeadline}</p>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-blue-800">Job Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-blue-800">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-blue-800">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* Contact HR */}
        <div className="flex items-center gap-3 mt-6 p-4 bg-blue-100 rounded-md">
          <Mail size={20} className="text-blue-700" />
          <div>
            <p className="text-blue-700 font-semibold">Contact HR: {hr_name}</p>
            <p className="text-blue-600 text-sm">Email: {hr_email}</p>
          </div>
        </div>

        {/* Apply Button */}
        <Link to={`/jobApply/${job._id}`}>
        <div className="text-center">
          <button className="px-6 py-3 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
            Apply Now
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}