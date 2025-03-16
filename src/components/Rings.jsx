import { useGSAP } from '@gsap/react';
import { useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const Rings = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  const texture = useTexture('textures/rings.png');

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...position);
      groupRef.current.scale.set(scale, scale, scale);
    }
  }, [position, scale]);

  useGSAP(() => {
    if (!groupRef.current) return;

    gsap.timeline({ repeat: -1, repeatDelay: 0.5 }).to(groupRef.current.rotation, {
      y: `+=${Math.PI * 2}`,
      x: `-=${Math.PI * 2}`,
      duration: 2.5,
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index}>
          <torusGeometry args={[(index + 1) * 1, 0.4, 16, 100]} />
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

export default Rings;
