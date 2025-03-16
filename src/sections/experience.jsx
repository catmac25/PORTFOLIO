import React from "react";
import spotlight from "../assets/spotlight1.png"
// import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/experience";
const Experience = () => {
    return (
        <section className="relative z-10">
            <div className="w-full h-10">
            <div className="absolute top-0 right-0">
            <img src={spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl filter brightness-95" />
          </div>
                <p className="text-white font-semibold text-3xl">My Work Experience</p>
                    <div className="sm:py-10 sm:px-5 px-2.5">
                        {workExperiences.map((item, index) => (
                            <div key={item.id} >
                                <div className="flex flex-col h-full justify-start items-center py-1">
                                </div>
                                <div className="sm:p-5 px-2.5 py-5 text-white">
                                    <p className="font-bold text-white text-2xl">{item.name}</p>
                                    <p className="mb-5 text-white text-xl"> {item.pos} -- {item.duration}</p>
                                    <p className="hover:text-whote transition ease-in-out duration-500">{item.title}</p>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    )
}

export default Experience;