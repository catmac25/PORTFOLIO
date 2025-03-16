import React from "react";
import image from "../assets/girlavatar.webp";
import nsut from "../assets/NSUT_logo.png";
import dps from "../assets/dpslogo.png";
// import {useNavigate} from "react-router-dom";
import Slider from "../components/slider/Slider";
import data from "../components/slider/data";
import "../components/slider/styles.css";

const About = () => {

    const linkedin = () => {
        window.open("https://www.linkedin.com/in/arpita-arora-891876251/", "_blank");
    }
    const school= () =>{
        window.open("https://www.dpsmathuraroad.org/", "_blank");
    }
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-200"> Let's Know About Me</h1>
            <section className="w-full flex flex-row items-center justify-around gap-x-3 h-180">
                <button className="container h-120 w-120 border border-gray-600 rounded-3xl shadow-2xl
        transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl" onClick={linkedin}>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-gray-300 font-bold text-2xl p-5">Hi I am Arpita</h1>
                        <br />
                        <img src={image} className="h-40 w-40 border rounded-xl border-white shadow-2xl"></img>
                        <br />
                        <br />
                        <p className="text-2xl text-center text-gray-300">With 3 years of experience, I have honed my Frontend and Backend skills, with special focus on 3D WebDesign</p>
                    </div>
                </button>
                <button className="container h-120 w-120 border border-gray-600 rounded-3xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl" onClick={school}>
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-gray-300 font-bold text-2xl p-5">My Education</h1>
                        <br />
                        <div className="flex flex-row justify-around gap-x-4">
                            <img src={nsut} className="h-40 w-40 border rounded-xl border-white shadow-2xl"></img>
                            <img src={dps} className="h-40 w-40 border rounded-xl border-white shadow-2xl"></img>
                        </div>
                        <br />
                        <br />
                        <p className="text-xl text-center text-gray-300">I did my schooling from DPS Mathura Road.</p>
                        <br />
                        <p className="text-xl text-center text-gray-300">Graduation from NSUT Delhi, CSDA branch.</p>
                    </div>
                </button>
            </section>
            <section className="text-white w-full flex flex-col justify-center items-center">
                <h1 className="text-4xl text-gray-200 ">My Tech-Stack</h1>
                <br/>
                <br/>
                <Slider data={data} activeSlide={2} />
            </section>
        </section>
    );
};

export default About;


