import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biograhpy'>
        <div className='banner'>
            <img src={imageUrl} alt='about img'/>

        </div>
        <div className='banner'>
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima assumenda, veniam adipisci quibusdam doloremque, tempore voluptate ratione accusamus laborum provident iure inventore, eveniet deserunt dolor? Nostrum, optio molestias! Cum, alias.</p>
            <p>Lorem ipsum dolor sit amet.0</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore illo, aspernatur illum est alias optio rerum doloremque molestiae possimus voluptatum culpa repellendus magni quibusdam omnis assumenda, dolorem ipsam, fugiat dolor numquam autem odio eligendi.</p>
            <p>Lorem ipsum dolor sit amet consectetur.
            </p>
        </div>
    </div>
  )
}

export default Biography