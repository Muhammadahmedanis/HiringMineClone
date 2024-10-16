import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function timeElapsed(data){
    const nom = new Date();
    const updDate = new Date(data);
    const diff = nom - updDate;
    const days = Math.floor(diff / (1000 * 3600));
    return days
}

function Jobs({dark}) {
    const[jobsData, setJobsData] = useState([]);
    
    const jobsApiCall = async() => {
        try {
            const res = await fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=');
            const jobsData = await res.json();
            console.log(jobsData.data);
            setJobsData(jobsData.data);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        jobsApiCall();
    }, [])
    let a  = JSON.parse(localStorage.getItem("theme"));
    
    return(
        <div className={`${dark || a ? 'bg-slate-900 text-white' : 'bg-white'} flex flex-wrap justify-center gap-4 px-6 pt-28`}>
            {
                jobsData.map((val, id) => {
                    let time = timeElapsed(data);
                    return <Cards key={val._id} companyName={val.companyName} time={time} views={val.views} designation={val.designation} city={val.city} 
                    salaryStart={val.payRangeStart} salaryEnd={val.payRangeEnd} width={'600'} /> 
                })
            }
            
        </div>
    )
}
export default Jobs;