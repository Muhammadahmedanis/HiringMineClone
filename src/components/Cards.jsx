import React, { useState } from "react";

function Cards({width, companyName, views, designation, city, salaryStart, salaryEnd, time, position, jobType, experience, desc, email, phone, skills, type}) {
    return(
        <div style={{ width: width ? `${width}px` : '400px' }}  className={'bg-white flex flex-col gap-5 p-5 bgImage1 b border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700'}>
            <div className="flex-1">
                <div className="flex justify-between">
                    <p className="text-[17px] text-[black] font-bold">{companyName ? companyName : 'Anonymous'}</p>
                    <img className="text-[rgb(104,81,255)] h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnFtZ0QCZX4QjIknoOfHvs5mcRCinDLKkAA&s" alt="" />
                </div>
                <div>
                     <p className="font-semibold text-[16px] text-black">{designation}</p>
                </div>
                <div>
                    <p className="text-[rgb(104,81,255)] font-semibold text-[17px]">{salaryStart && salaryEnd ? salaryStart + '-' + salaryEnd: salaryStart ? salaryStart : 'No Salary Mentioned'}</p>
                </div>
            </div>
            {type === "jobDetail" &&
                <JobDetail designation={designation} position={position} jobType={jobType} skills={skills} experience={experience} desc={desc} email={email} phone={phone} />
            }
            <div className="flex-2">
                <div>
                    <p className="font-semibold text-[17px] text-black">{city ? city + ', Pakistan' : 'karachi, Pakistan'}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[rgb(104,81,255)] font-semibold text-[16px]">{time ? time : 2} hours ago</p>
                    <p className="text-black">{views} views</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;


function JobDetail({ designation, position, jobType, experience, desc, email, phone, skills}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button onClick={handleOpenModal} className="block max-w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> About Job
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div id="popup-modal" tabIndex="-1" className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden h-screen w-full bg-gray-900 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Close button */}
                            <button type="button" onClick={handleCloseModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7l6-6"/>
                                </svg>
                            </button>

                            <div className="p-3 md:p-4 text-center">
                                <p className="text-[18px] px-2 font-extrabold text-[rgb(104,81,255)] dark:text-gray-400 mb-2"> {designation} </p>
                                <div style={{boxShadow: 'rgba(0,0,0,0.25) 0px 14px 28px, rgba(0,0,0,0.22) 0px 10px 10px'}} className="border rounded p-3 pb-0">
                                <p className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm lg:text-[17px] font-semibold my-1 me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">Job details</p>
                                <div className="flex justify-between my-1">
                                <p className="text-left text-[rgb(104,81,255)] text-[13px] lg:text-[15px] font-mono"> <span className="font-bold text-black">Position: </span>{position}</p>
                                <p className="text-left text-[rgb(104,81,255)] text-[13px] lg:text-[15px] font-mono"> <span className="font-bold text-black">Job Type: </span>{jobType}</p>
                                </div>
                                <div className="flex justify-between my-1">
                                <p className="text-left text-[rgb(104,81,255)] font-mono text-[13px] lg:text-[15px]"> <span className="font-bold text-black">Experience: </span> {experience ? experience : 'no experience'}</p>
                                </div>
                                
                                <p className="text-left text-[12px] lg:text-[14px] text-black mt-2"> <span className="font-bold">Job Summary: </span> {desc} </p>

                                <p className="font-bold text-left my-2 text-[12px] lg:text-[15px] text-black">Skills:</p>
                                <div className="text-left flex flex-wrap gap-1">
                                    {
                                     skills.map((val, id) => {
                                       return  <span key={id} className="bg-blue-100 text-blue-800 text-[12px] m-1 font-medium me-0 px-2 py-1.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{val}</span>
                                     })
                                    }
                                </div>
                                <p className="text-left my-2 text-black text-[13px] lg:text-[15px]">Share your resume at <b className="text-[rgb(104,81,255)]">{email ? email : '+92' + phone}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}