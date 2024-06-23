import React from 'react'
const Hero = ({title,imageUrl}) => {
  return (
   <div className='hero container'>
    <div className='banner'>
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam suscipit aspernatur quae et cupiditate! Odit vitae ratione nisi voluptate soluta aut voluptas quae, nam animi, enim dolores maxime quidem?</p>
    </div>
    <div className='banner'>
        <img src={imageUrl} alt='hero' className='animated-image' />
        <span>
            <img src='/Vector.png' alt='vector'/>
        </span>
    </div>
   </div>
  )
}

export default Hero