import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import {useMediaQuery} from "react-responsive";
// import { DirectionalLight } from "three";
import {Leva} from "leva";
import {useControls} from "leva"
import ReactLogo from "../components/reactLogo";
import Target from "../components/target";
import Cube from "../components/Cube";
import Rings from "../components/Rings";

const Hero = () =>{
    const controls = useControls ('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -15,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        }, 
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10
        }, 
        scale: {
            value: 0,
            min: -10,
            max: 10
        }
    });
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth: 440});

    // const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="text-white font-bold text-4xl text-center">Hi folks! I am a tech-geek</p>
                <p className="font-semibold text-2xl text-center text-gray-300">Building Products and Brands</p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="w-full h-full absolute inset-0">
            <Leva/>
                <Canvas className="w-full h-full">
                    <Suspense fallback = {<CanvasLoader/>}>

                   
                    <PerspectiveCamera makeDefault position = {[0,0,30]} fov={75}></PerspectiveCamera>
                    
                    <HackerRoom  position= {[-0.5,-15,-10]} rotation= {[6.6 , 0.0, 3.2]} scale={isMobile? -0.1: -0.2}/>
                    <group position={[-30,-7,0]}>
                        <Target/>
                        <Cube position={[2, 10, 0]}/>
                    </group>
                    <ReactLogo position={[30,10,0]}/>
                    <Rings position={[30, -10, 0]}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
                <br/>
                <br/>
            </div>
        </section>
    )
}

export default Hero;