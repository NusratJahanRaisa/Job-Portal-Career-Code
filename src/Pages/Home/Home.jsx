import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { useLoaderData } from 'react-router';
import { useState } from 'react';

const Home = () => {

    const jobsData = useLoaderData();
    const [jobs,setJobs] = useState(jobsData);


    return (
        <div>
           <Banner></Banner>
           <Suspense fallback='Loading Hot Jobs'>
            <HotJobs jobs={jobs} setJobs={setJobs}></HotJobs>
           </Suspense>
        </div>
    );
};

export default Home;