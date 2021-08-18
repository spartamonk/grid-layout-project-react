import React from 'react'
import { SectionTitle } from '.'
import { SingleImage } from '.'
import {images} from '../utils/constants'
import { HomeBtn } from '.'
const Images = () => {
 return (
   <>
     <section className='section'>
       <SectionTitle title='tiles layout' />
       <div className='section-center tiles-center'>
         {images.map((image) => (
           <SingleImage key={image.id} {...image} />
         ))}
       </div>
     </section>
     <HomeBtn />
   </>
 )
}

export default Images
