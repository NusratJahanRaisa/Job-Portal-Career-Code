import React, { useEffect, useState } from 'react';
import Hooks from '../../Hooks/Hooks';
import axios from 'axios';

const MyApplications = () => {

    const {user} = Hooks()
    const [applicationData,setApplicationData] = useState([])

    useEffect(()=>{
    axios.get(`http://localhost:5000/applications?email=${user?.email}`)
    .then(response=>
    setApplicationData(response.data)
    )
    .catch(error=>
    console.log(error)
    )
    },[user])


    return (
        <div className='mt-20'>
           {applicationData.length} 
        </div>
    );
};

export default MyApplications;