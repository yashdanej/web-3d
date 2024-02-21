import React, { useRef } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import './index.css';

const TopSection = ({myElement}) => {
  return (
    <div ref={myElement} className="topCon">
      <div className='topCenter'>
        <h1 className='mainName'>Meta+</h1>
        <h4 className='slogan'>Welcome To The Futuristic Gen</h4>
        <p className='description'>
          You can help us cool off our world and have it go back to it's best
          state ever by donating to help fix our only world and our beloved EARTH!
          Be cool and let the earth be cool. Let the ice burgs to live. Globe is
          warming and will set to fire. Stop polluting, it will cost extra.
        </p>
      </div>
    </div>
  )
}

export default TopSection