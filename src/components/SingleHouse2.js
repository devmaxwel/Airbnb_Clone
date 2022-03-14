import React from 'react'
import './home.css'

const SingleHouse2 = () => {
  return (
    <div className="card_comp">
      <img src={data.src} height="100px" alt={data.title} />
      <div className="card_info">
        <h2>{data.title}</h2>
        <h4>{data.description}</h4>
        <h3>{data.price}</h3>
      </div>
    </div>
  );
}

export default SingleHouse2;