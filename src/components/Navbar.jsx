import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ setKeyword}) {
    const [isDark, setIsDark] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);  // For navigation toggle
    const location = useLocation();
    const[inp, setInp] = useState('');

    // // Check for the saved theme in localStorage on page load
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme");
    //     if (savedTheme !== null) {
    //         setIsDark(JSON.parse(savedTheme));  // Update the theme state based on localStorage
    //         setDark && setDark(JSON.parse(savedTheme)); // Call setDark if provided
    //     }
    // }, [location.pathname, setDark]);

    // Toggle theme and update localStorage
    // const handleThemeToggle = () => {
    //     const newTheme = !isDark;
    //     setIsDark(newTheme);
    //     setDark && setDark(newTheme);  // Call the parent setDark if provided
    //     localStorage.setItem("theme", JSON.stringify(newTheme));  // Save the new theme state in localStorage
    // };

    // Toggle the navigation menu open/close
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
        <nav className='bg-white text-gray-900 z-10 fixed p-4 top-0 w-full border-gray-200'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto">
                <img src="https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png" className="h-10" alt="HiringMineLogo" />

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Theme Toggle Button */}
                    <label className="inline-flex items-center ms-5 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 dark:peer-focus:ring-[#6851ff] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#6851ff]`}></div>
                    </label>

                    {/* Navigation Toggle Button for Mobile */}
                    <button type="button" onClick={handleNavToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={isNavOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {/* Navbar Menu */}
                {
                location.pathname !== "/job" ? (
                    <div className={`${isNavOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 cursor-pointer`} id="navbar-cta">
                        <ul className={`flex flex-col font-medium text-[20px] p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${isDark ? 'bg-slate-900 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-100'}`}>
                            <li>
                                <p className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500' aria-current="page">About Us</p>
                            </li>
                            <li>
                                <p className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500' aria-current="page">People</p>
                            </li>
                            <li>
                                <Link to={'/job'}>
                                    <p className='block py-2 px-3 md:p-0 text-black hover:bg-gray-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 '>Jobs</p>
                                </Link>
                            </li>
                            <li>
                                <p className='block py-2 px-3 md:p-0 text-white hover:bg-gray-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Login</p>
                            </li>
                        </ul>
                    </div>
                    ) : (
                        <div className="items-center justify-center w-auto cursor-pointer order-3 md:order-1 lg:order-1 my-4 mx-auto" id="navbar-cta">
                            <div className="w-[350px] md:w-[550px] lg:w-[600px] px-2">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <p className="font-semibold">Jobs</p>
                                    </div>
                                    <input onChange={(e) => setInp(e.target.value)} value={inp} className="bg-transparent block w-full pe-6 py-[14px] ps-16 text-[13px] lg:text-[17px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Job titles or companies " required />
                                    <button onClick={() => {
                                        setKeyword(inp)
                                        setInp('');
                                    }} type="submit" className="text-white absolute end-2 bottom-2 bg-[rgb(104,81,255)] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-2 lg:px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Find Jobs</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
        </>
    );
}

export default Navbar;