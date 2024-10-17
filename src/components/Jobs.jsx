// import React, { useEffect, useState } from "react";
// import Cards from "./Cards";

// const Loader = () => {
//   return (
//     <div className="flex justify-center">
//         <div role="status">
//         <svg
//             aria-hidden="true"
//             className="inline w-12 h-12 text-center font-extrabold text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
//             viewBox="0 0 100 101"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             >
//             <path
//             d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//             fill="currentColor"
//             />
//             <path
//             d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//             fill="currentFill"
//             />
//         </svg>
//         </div>
//     </div>
//   );
// };

// function timeElapsed(data) {
//   const nom = new Date();
//   const updDate = new Date(data);
//   const diff = nom - updDate;
//   const hours = Math.floor(diff / (1000 * 3600)); // Converted to hours instead of days
//   return hours;
// }

// function Jobs({ dark }) {
//   const [jobsData, setJobsData] = useState([]);
//   const [limit, setLimit] = useState(10); // Start with 10 jobs
//   const [loading, setLoading] = useState(false); // To track loading state
//   const [hasMore, setHasMore] = useState(true); // To track if more data is available

//   // Fetch jobs data with the updated limit
//   const fetchJobs = async (newLimit) => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=${newLimit}&pageNo=1&keyWord=&category=`
//       );
//       const data = await res.json();

//       // Check if more jobs are available
//       if (data.data.length < newLimit) {
//         setHasMore(false);
//       }

//       setJobsData((prevJobs) => [...prevJobs, ...data.data]); // Append new jobs
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initial fetch
//   useEffect(() => {
//     fetchJobs(limit);
//   }, [limit]);

//   // Handle scrolling for infinite scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if the user scrolled to the bottom
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 100 &&
//         hasMore &&
//         !loading
//       ) {
//         setLimit((prevLimit) => prevLimit + 10); // Increase limit by 10
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
//     };
//   }, [hasMore, loading]);

//   let a = JSON.parse(localStorage.getItem("theme"));

//   return (
//     <div
//       className={`${
//         dark || a ? "bg-slate-900 text-white" : "bg-white"
//       } flex flex-wrap justify-center gap-4 px-6 pt-28`}
//     >
//       {jobsData.map((val, id) => {
//         let time = timeElapsed(val.updatedAt);
//         return (
//           <Cards
//             key={val._id + id}
//             companyName={val.companyName}
//             time={time}
//             views={val.views}
//             designation={val.designation}
//             city={val.city}
//             salaryStart={val.payRangeStart}
//             salaryEnd={val.payRangeEnd}
//             width={"600"}
//           />
//         );
//       })}
//       {/* {loading && <Loader />} Show loading message */}
//       {!hasMore && <p>No more jobs available</p>} {/* Message if no more jobs */}
//     </div>
//   );
// }



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
    console.log(dark);
    
    const[jobsData, setJobsData] = useState([]);
    const[limit, setLimit] = useState(10);
    
    useEffect(() => {
    const jobsApiCall = async() => {
        try {
            const res = await fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?${limit}=10&pageNo=1&keyWord=&category=`);
            const jobsData = await res.json();
            // console.log(jobsData.data);
            setJobsData(jobsData.data);
        } catch (error) {
            console.log(error);
        }
    } 
        jobsApiCall();
    }, [])

    let a  = JSON.parse(localStorage.getItem("theme"));
    
    return(
        <div className={`${dark || a ? 'bg-slate-900 text-white' : 'bg-white'} flex flex-wrap justify-center gap-4 px-6 pt-28`}>
            {
                jobsData.map((val, id) => {
                    let time = timeElapsed(val.updatedAt);
                    return <Cards dark={dark} a={a}  key={val._id} position={val.position} skills={val.skills} desc={val.category.description} email={val.applyEmail} phone={val.applyPhone} jobType={val.jobType} experience={val.experience} companyName={val.companyName} time={time} views={val.views} designation={val.designation} city={val.city} 
                    salaryStart={val.payRangeStart} salaryEnd={val.payRangeEnd} width={'600'} /> 
                })
            }
            
        </div>
    )
}

export default Jobs;