import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return(
        <footer style={{background: "linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%)"}} className="dark:bg-gray-900 mt-3">
            <div className="w-full max-w-screen-xl mx-auto px-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="pt-4">
                        <img src="https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png" className="h-8" alt="Flowbite Logo" />
                        <p className="text-white w-[350px] py-3 text-[17px]">HiringMine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</p>
                    </div>
                    <div className="mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                       <p className="my-3 font-semibold text-[17px]">Contact Us</p>
                       <p className="flex items-center gap-1"><MdOutlineEmail className="text-[16px]" /> portal.hiringmine@gmail.com</p>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-white text-[20px] font-bold">Follow us</p>
                    <div className="flex items-center gap-8 text-white text-[22px] pt-4">
                        <FaFacebookF />
                        <BsWhatsapp />
                        <BsInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
                <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 w-full" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400 text-[18px] py-1"> <a className="hover:underline">Privacy Policy</a> Terms & Conditions</span>
                <span className="block text-sm text-white sm:text-center dark:text-gray-400 text-[17px] pb-2"> Copyright Hiringmine 2024. All Rights Reserved </span>
        </footer>
    )
}

export default Footer;