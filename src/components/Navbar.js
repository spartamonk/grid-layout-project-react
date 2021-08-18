import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className="nav-links">
       {
        links.map(link=> {
         const {id, name}= link;
         return (
          <li key={id}>
           <Link className="nav-link" to={`/${name}`}>{name}</Link>
          </li>
         )
        })
       }
      </ul>
    </nav>
  )
}

export default Navbar
