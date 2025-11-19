import React from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobs,setJobs}) => {
    return (
        <div className='mt-28 grid grid-cols-4 gap-4 w-11/12 mx-auto items-stretch mb-8'>
           {jobs.map(job=><JobCard key={job._id} job={job} setJobs={setJobs}></JobCard>)} 
        </div>
    );
};

export default HotJobs;