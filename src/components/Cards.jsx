import React from "react";
function Cards({width, companyName, views, designation, city, salaryStart, salaryEnd, time}) {
    let a  = JSON.parse(localStorage.getItem("theme"));
    return(
        <div className={`${width ? `w-[${width}px]` : `w-[400px]`} ${a ? 'bg-slate-900' :'bg-white' }  flex flex-col gap-10 p-6 bgImage1 b border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700`}>
            <div className="flex justify-between">
                <div>
                    <p className="text-[17px]">{companyName ? companyName : 'Anonymous'}</p>
                    <p className="font-semibold text-[17px]">{designation}</p>
                    <p className="text-[rgb(104,81,255)] font-semibold text-[16px]">{salaryStart ? salaryStart + '-' + salaryEnd : 'No Salary Mentioned'}</p>
                </div>
                <div>
                    <img className="text-[rgb(104,81,255)] h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnFtZ0QCZX4QjIknoOfHvs5mcRCinDLKkAA&s" alt="" />
                </div>
            </div>
            <div className="">
                <div>
                    <p className="font-semibold text-[17px]">{city ? city + ', Pakistan' : 'karachi, Pakistan'}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[rgb(104,81,255)] font-semibold text-[16px]">{time ? time : 2} hours ago</p>
                    <p>{views} views</p>
                </div>
            </div>
            
        </div>
    )
}
export default Cards;