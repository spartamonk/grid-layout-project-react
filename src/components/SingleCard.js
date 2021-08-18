import React from 'react'

const SingleCard = ({name, title, image, text, icons}) => {
 return (
  <article className="card">
   <img src={image} alt={name} className="card-img" />
   <div className="card-info">
    <h3>{title}</h3>
    <p>{text}</p>
   </div>
   <div className="card-footer">
    {
     icons.map((icon, index)=> <span className="card-icon" key={index}>{icon}</span>)
    }
   </div>
  </article>
 )
}

export default SingleCard
