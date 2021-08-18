import React from 'react'
import { Link } from 'react-router-dom'
import { cards } from '../utils/constants'
import { HomeBtn } from '../components'
import { links } from '../utils/constants'
const Layout = () => {
 return (
   <>
     <main className='layout-main'>
       <header className='layout-header'>
         <h2>grid makes layout easy</h2>
       </header>
       <nav className='navbar layout-nav'>
         <ul className='nav-links'>
           {links.map((link) => {
             const { id, name } = link
             return (
               <li key={id}>
                 <Link className='nav-link' to={`/${name}`}>
                   {name}
                 </Link>
               </li>
             )
           })}
         </ul>
       </nav>
       <div className='content'>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
           assumenda deleniti suscipit ea placeat esse amet quibusdam,
           perferendis ipsam cum culpa animi magnam ex recusandae? Similique
           vero, delectus perferendis assumenda quia rem quasi nulla voluptate
           ipsam, eius, libero ipsa! Ullam deleniti earum porro totam sequi
           dolorum aspernatur ad officiis repellendus nam veritatis
           reprehenderit eligendi distinctio dolore saepe quidem repudiandae
           molestias necessitatibus, accusantium placeat explicabo iusto iure
           voluptates. Laborum vel animi velit architecto impedit nostrum ex
           amet provident beatae, esse inventore doloremque ipsam illum eligendi
           veritatis mollitia ducimus voluptates quas voluptatem in minima.
           Voluptas, qui corrupti. Beatae ad ab repellat sequi!{' '}
         </p>
       </div>
       <div className='sidebar'>
         <ul className='sidebar-icons'>
           {cards[0].icons.map((icon) => (
             <li>
               <span className='layout-icon'>{icon}</span>
             </li>
           ))}
         </ul>
       </div>
       <footer className='footer'>
         <p>
           copyright <span>&copy;</span> all rights reserved
         </p>
       </footer>
     </main>
     <HomeBtn />
   </>
 )
}

export default Layout
