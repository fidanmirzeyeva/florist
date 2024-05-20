import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import { MainContext } from '../../context/MainProvider'

function Nav() {
  const {basket}=useContext(MainContext)
  return (
   <>
   <header>
   <nav className='nav'>
    <div className="nav_name">
      <p>Florist</p>
    </div>
     <div className="nav_list">
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/admin'}>Admin</Link>
        <Link to={'/add'}>Add</Link>
        <Link to={'/basket'}>Basket{basket.length}</Link>
        <Link to={'/wishlist'}>WishList</Link>
       
      </ul>
     </div>

   </nav>
   </header>
   </>
  )
}

export default Nav
