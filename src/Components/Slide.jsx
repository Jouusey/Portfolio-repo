import React, { useState } from 'react'
import "./slide.css"

function Slide() {
  const img1 = "./img1.png"
  const img2 = "./img2.png"
  const img3 = "./img3.png"
  const img5 = "./img5.png"
  const img6 = "./img6.png"

  const imagesPort = [img1, img2, img3, img5, img6]
  const [imagesTurn, setImagesTurn] = useState(0)
  const [imagem, setImagem] = useState(imagesPort[0])
 
  function back() {
    setImagesTurn((prev) => (prev - 1 + imagesPort.length) % imagesPort.length); 
  }

  function next() {
    setImagesTurn((prev) => (prev + 1) % imagesPort.length)
  }

  React.useEffect(() => {+
    setImagem(imagesPort[imagesTurn])
  }, [imagesTurn]);

  return (
    <div className="slider-container">
      <div className="image-container">
        <button className='buttonSlideA' onClick={back}>  &#9664; </button>
        <img className='imgPort' src={imagem} alt="current slide" />
        <button className='buttonSlideD' onClick={next}>  &#9654; </button>
      </div>
    </div>
  );
}

export default Slide;