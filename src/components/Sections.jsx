import React from "react";
import Cards from "./Cards";
function Sections(){
    return(
        <div className="bgImage mb-3">
        <div className="text-center pt-12 pb-4 lg:max-w-[1000px] mx-auto">
           <h1 style={{ background: 'linear-gradient(106.43deg, #522fd4, #6bdcff 95.12%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '750'}} className="font-normal pb-4 text-5xl lg:text-7xl"> Dig. Apply <div>Prepare Your Future</div> </h1>

            <p className="text-[20px] text-center">Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</p>

            <div className="max-w-2xl mx-auto my-6 px-2">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img className="" src="https://www.hiringmine.com/assets/UserVector-dcdef637.svg" alt="" />
                </div>
                    <input type="search" id="default-search" className="block w-full px-3 py-[14px] ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2 bg-[rgb(104,81,255)] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find Jobs</button>
                    
                </div>
            </div>
            <div>
                <p style={{background: 'linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',}} className="text-3xl font-bold my-3">Popular Searches</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <Button title={'Software'} />
                <Button title={'Developer'}/>
                <Button title={'Backend'}/>
                <Button title={'React'}/>
                <Button title={'Node'}/> 
                <Button title={'React Natice'}/>
                <Button title={'Flutter'}/>
                <Button title={'React'}/>
                <Button title={'UI/UX'}/>
                <Button title={'Designer'}/>
                <Button title={'Web'}/>
                <Button title={'SEO'}/>
                <Button title={'Marketing'}/>
                <Button title={'Writer'}/>
            </div>
        </div>
            <div>
                <img src="https://www.hiringmine.com/assets/art%20work-df4f7a46.png" alt="" />
            </div>
            <div className="bg-white pt-16">
                <div className="my-3 mx-auto max-w-screen-lg ">
                    <h3 className="text-5xl font-bold text-center">Find Your Dream Job <span className="text-[#6851ff]">Super Fast Ever</span></h3>
                    <p className="text-xl text-center py-1">We are here to help jobseekers connect with organizer and companies. We are provides the best opportunities to professional people.</p>
                    <div className="py-6">
                        <img src="https://www.hiringmine.com/assets/banner_career-4b7d86fb.webp" alt="" />
                    </div>
                    <div className="py-4">
                        <h3 className="text-[40px] font-bold text-center"> <span className="text-[#6851ff]">Countless Career Options</span> Are Waiting For You To Explore </h3>
                    </div>
                </div>
                    <div className="flex flex-wrap gap-4 justify-center py-3 my-2">
                        <Card jobTitle={'Marketing & Sales'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'} />
                        <Card jobTitle={'Development'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'}/>
                        <Card jobTitle={'Art & Illustration'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'}/>
                        <Card jobTitle={'Animation'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'}/>
                        <Card jobTitle={'Marketing & Sales'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'} />
                        <Card jobTitle={'Development'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'}/>
                        <Card jobTitle={'Art & Illustration'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'}/>
                        <Card jobTitle={'Animation'} image={'https://www.hiringmine.com/assets/ArtIcon-abc0c65a.svg'}/>

                    </div>

                    <div className="py-4 my-2">
                        <h3 className="text-5xl font-bold text-center"> <span className="text-[#6851ff]">Latest And Top</span> Job Openings</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center my-8">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
            </div>
        </div>
    )
}
export default Sections;

const Button = ({title}) => {
    return(
        <button type="button" className="py-1.5 px-3 me-2 my-2 text-[14px] font-bold text-[rgb(104,81,255)] focus:outline-none bg-transparent rounded-lg border border-[rgba(104,81,255,0.5)] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-250 ease-out">{title}</button>
    )
}

function Card({jobTitle, image}) {
    return(
        <div className="flex items-center justify-center flex-col min-w-[300px] h-48 p-4 bgImage1 border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
            <img className="text-[rgb(104,81,255)] py-2" src={image} alt="" />
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-[rgb(104,81,255)] dark:text-white">{jobTitle}</h5>
            </a>
            <p className="mb-3 font-semibold text-xl text-gray-500 dark:text-gray-400">461 Jobs</p>
        </div>
    )
}