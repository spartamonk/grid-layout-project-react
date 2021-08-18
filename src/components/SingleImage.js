import React from 'react'

const SingleImage = ({id, image, name}) => {
 return (
  <article className={`tile-img-container img-${id}`}>
   <img src={image} alt={name} className="tile-img" />
  </article>
 )
}

export default SingleImage
