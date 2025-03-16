import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import {useNavigate} from "react-router-dom";
const Footer = () => {
    // const navigate = useNavigate();
    const facebook = () =>{
        window.open("https://www.facebook.com/")
    }
    const instagram = () =>{
        window.open ("https://www.instagram.com/_arpixoxs.25_/?__d=11%2F");
    }
    const linkedin = () =>{
        window.open("https://www.linkedin.com/in/arpita-arora-891876251/")
    }
    
    return (
        <section className="w-full h-60 relative z-0 transition duration-300 bg-gradient-to-r from-black-800 rounded-3xl to-stone-500 flex flex-row justify-around items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-white text-xl font-semibold">Contact Me </p>
                <br/>
                <div className="flex flex-row justify-around gap-x-5">
                    <FaFacebook onClick={facebook} className="w-10 h-10 text-white"/>
                    <FaInstagram onClick = {instagram} className="w-10 h-10 text-white"/>
                    <FaLinkedin onClick={linkedin} className="w-10 h-10 text-white"/>
                </div>
                <br/>
                <br/>
                <div className="flex flex-col justify-center items-center">
                <p className="text-white text-xl font-semibold">You can send me an EMAIL at </p>
                <p className="text-white text-l">arpitaarorawork@gmail.com</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a href="#experience" className="text-white font-medium my-2">Work Experience</a>
                <a href="#about" className="text-white  font-medium my-2 ">About Me</a>
                <a href="#home" className="text-white  font-medium my-2 ">Back To Home</a>
            </div>
        </section>
    )
}

export default Footer;