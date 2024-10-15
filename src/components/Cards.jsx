import React from "react";
function Cards({}) {
    return(
        <div className="w-[400px] flex flex-col gap-10 p-6 bgImage1 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between">
                <div>
                    <p className="text-[17px]">Visionary Renders</p>
                    <p className="font-semibold text-[17px]">Client Hunter</p>
                    <p className="text-[rgb(104,81,255)] font-semibold text-[16px]">No Salary Mentioned</p>
                </div>
                <div>
                    <img className="text-[rgb(104,81,255)] h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnFtZ0QCZX4QjIknoOfHvs5mcRCinDLKkAA&s" alt="" />
                </div>
            </div>
            <div className="">
                <div>
                    <p className="font-semibold text-[17px]">Karachi, Pakistan</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-[rgb(104,81,255)] font-semibold text-[16px]">13 hours ago</p>
                    <p>3 views</p>
                </div>
            </div>
            
        </div>
    )
}
export default Cards;