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
  // const ref = useRef();
  // gsap.to(ref.current, {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: ref.current,
  //     scroller: 'body',
  //     markers: true,
  //     start: 'top 10%',
  //     end: "top 1%",
  //     scrub: 5
  //   }
  // })
  
  // tl.to(".topCenter", {
  //   rotateX: "90deg"
  // })

  const myElement = useRef(null);
  useEffect(() => {
    const el = myElement.current;
    gsap.fromTo(el, {opacity: 1}, {opacity: 0, scrollTrigger:{
      trigger: el,
      scrub: 3,
      markers: true,
      start: 'top',
      end: 'bottom 90%'
    }})
  }, []);
  return (
    <>
      <CanvasContainer>
        <TopSection myElement={myElement} />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <SecondCompo/>
    </>
  );
}

export default App;
