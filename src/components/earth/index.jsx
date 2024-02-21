import React, { useRef } from 'react'
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudMap from '../../assets/textures/8k_earth_clouds.jpg';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = (props) => {
    const [ colorMap, normalMap, specularMap, cloudMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]);
    const cloudRef = useRef();
    const earthRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 6
        cloudRef.current.rotation.y = elapsedTime / 6
    });
    return (
    <>
        {/* <ambientLight intensity={1} /> */}
        <pointLight color="#f6f3ea" position={[1.85, 0, 6.8]} intensity={22.53} />
        <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true} />
        <mesh ref={cloudRef} position={[0, 0, 3]}>
            <sphereGeometry args={[1.0005, 32, 32]} />
            <meshPhongMaterial
            map={cloudMap} 
            opacity={0.4} 
            depthWrite={true} 
            transparent={true} 
            side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={earthRef} position={[0, 0, 3]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial 
            map={colorMap} 
            normalMap={normalMap} 
            metalness={0.4} 
            roughness={0.7} />
            {/* <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            /> */}
        </mesh>   
    </>
    )
}

export default Earth