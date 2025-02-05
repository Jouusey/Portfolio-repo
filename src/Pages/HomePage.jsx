import React, { useState } from 'react';
import './HomePage.css'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Slide from '../Components/Slide';
function HomePage() {
  
    const[content, setContent] = useState(<Slide />)

    

  return (
    <div className="HomePage-Container">

  <Header/>
  <Navbar setContent={setContent} />

  
  {content}


    </div>
  )
}

export default HomePage
