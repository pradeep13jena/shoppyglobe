import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id='header' className='header'>
      <div className='logoDiv'>
        <Link to={'/'} className='companName'>Shoppyglobe</Link>
      </div>
      <div className={`navLink ${isMenuOpen ? 'open' : ''}`}>
        <Link to={'/'} className='home'>Home</Link>
        <Link to={'/Products'} className='browse'>Products</Link>
        <Link to={'/cart'} className='wishlist'>Cart</Link>
      </div>
      <div className="burgerIcon">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  )
}
