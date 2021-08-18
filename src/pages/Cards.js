import React from 'react'
import {cards} from '../utils/constants'
import { SectionTitle } from '../components'
import { SingleCard } from '../components'
import { HomeBtn } from '../components'
const Cards = () => {
 return (
   <>
     <section className='section cards-section'>
       <SectionTitle title='three column layout' />
       <div className='section-center cards-center'>
         {cards.map((card) => {
           return <SingleCard id={card.id} {...card} />
         })}
       </div>
     </section>
     <HomeBtn />
   </>
 )
}

export default Cards
