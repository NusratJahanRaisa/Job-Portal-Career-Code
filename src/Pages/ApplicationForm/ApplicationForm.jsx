import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";
import Hooks from "../../Hooks/Hooks";
import axios from 'axios'
import Swal from 'sweetalert2'



const ApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const {user} = Hooks()
  const jobData = useLoaderData();
  // const job = jobData.find((j) => String(j.id) === String(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);



    // Collect values directly from the form
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const location = e.target.location.value;
    const position = e.target.position.value;
    const experience = e.target.experience.value;
    const skills = e.target.skills.value;
    const coverLetter = e.target.coverLetter.value;
    const resume = e.target.resume.files[0]; // file

    
    // final object creation to send in DB
    const application = {
      jobId : id,
      applicant : user.email,
      fullName,
      email,
      phone,
      location,
      position,
      experience,
      skills,
      coverLetter,
      resume
    }

  axios.post('http://localhost:5000/applications', application)
  .then(response=> {
    console.log(response);
    if(response.data.insertedId){
      Swal.fire({
      title: "Application Submitted!",
      icon: "success",
      draggable: true
      });
    }
  })
  .catch(error=> {
    console.log(error);
  });


    // setTimeout(() => {
    //   setLoading(false);
    //   alert("Application submitted successfully!");
    // }, 2000);
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center pt-8 pb-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-xl space-y-3"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center ">
          Apply for <Link to={`/jobs/${id}`}><span className="text-blue-600">{jobData.title}</span></Link>
        </h2>

        {/* Personal Info */}
        <h1 className="text-sm text-gray-600">Personal Informations </h1>
        <div className="space-y-1">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
          />
        </div>

        {/* Professional Info */}
        <h1 className="text-sm text-gray-600">Professional Informations </h1>
        <div className="space-y-2">
          <input
            type="text"
            name="position"
            placeholder="Desired Position *"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
          />
        </div>

        {/* Skills */}
        <h1 className="text-sm text-gray-600">Skills</h1>
        <div className="space-y-1">
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            className="w-full h-8 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
          />
        </div>

        {/* Cover Letter */}
        <h1 className="text-sm text-gray-600">Cover Letter</h1>
        <div className="space-y-1">
          <textarea
            name="coverLetter"
            rows={4}
            placeholder="Write Here..."
            className="w-full h-20 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2  text-xs focus:ring-blue-500"
          />
        </div>

        {/* Resume Upload */}
        <h1 className="text-sm text-gray-600">Resume</h1>
        <div className="space-y-1">
          <label className="block text-gray-700 font-medium">
            Upload Resume (PDF)
          </label>

          <input
            type="file"
            name="resume"
            accept=".pdf"
            className="w-full text-gray-700"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
