import React from 'react'
import { Link } from 'react-router-dom'
const HomeBtn = () => {
 return (
   <div>
     <Link to='/' className='btn'>
       back to home
     </Link>
   </div>
 )
}

export default HomeBtn
