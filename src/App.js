import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import Earth from './components/earth/index'
import TopSection from './components/topSection/Index'
import SecondCompo from './components/secondCom/SecondCompo';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  const ref = useRef();
  // const tl = gsap.timeline({scrollTrigger:{
  //   trigger: el.current,
  //   from: "10% 50%",
  //   end: "50% 50%",
  //   markers: true,
  //   scrub: true,
  //   pin: true,
  // }})
  
  // tl.to(".topCenter", {
  //   rotateX: "90deg"
  // })
  const myElement = useRef(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(myElement.current, {rotation: 0}, {rotation: 160, duration: 3, scrollTrigger:{
      trigger: el
    }})
  }, []);
  return (
    <>
      <CanvasContainer ref={ref}>
        <TopSection myElement={myElement} />
        <Canvas>
          <Suspense fallback={null}>
            <Earth/>
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <SecondCompo/>
    </>
  );
}

export default App;
