import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: "+=0.5", 
                duration: 1.5,
                repeat: -1,
                yoyo: true
            });
        }
    }, [targetRef.current]); 

    return (
        <mesh {...props} ref={targetRef} position={[4,-10,0]} scale={3.5}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Target;
