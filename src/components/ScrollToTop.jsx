import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function ScrollToTop(){
  const[scrollState,setScrollstate]=useState(false)
  const toTop = ()=>{
    window.scrollTo({ top:0 });
  }
  window.addEventListener("scroll", ()=>{
    window.pageYOffset > 200 ? setScrollstate(true): setScrollstate(false);
  })

  return (
    <ToTop scrollState={scrollState} onClick={toTop}>

      <img src={logo} alt="logo" />
    </ToTop>
  )
}

const ToTop = styled.div`
display: ${({scrollState })=> (scrollState ? "block":"none")};
position:fixed;
bottom: 1rem;
right: 2rem;
z-index: 10;
cursor:pointer;
img{
height: 1.5rem;
}
border-radius: 2rem;
background-color: #1900ff39;
padding: 1rem;


`;
