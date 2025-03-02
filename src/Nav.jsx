import { useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function Nav() {
  const [toggle, settoggle] = useState(false)
  const handelclick = ()=> {
    settoggle(!toggle)
  }
  const bodyclick = ()=>{
    if(toggle){
      settoggle(!toggle)
    }
  }
  //http://localhost:5173/
  return (
    <>
    <div id='fix' className="fix">
      <nav className={`na ${toggle ? 'mna' : ''}`}>
        <div className='hd'>
        <img src='./logo.png' className='brand'></img>
        <h3 className='menu' onClick={handelclick}>☰</h3>
        </div>
        {/* <ul className={`ull ${toggle ? 'active' : ''}`}>
          <li> <Link to='/' onClick={bodyclick}> Home </Link> </li>
          <li onClick={bodyclick}>About Us</li>
          <li onClick={bodyclick}>Services</li>
          <li onClick={bodyclick}>Projects</li>
          <li onClick={bodyclick}>Contact Us</li>
        </ul> */}

        <ul className={`ull ${toggle ? 'active' : ''}`}>
          <li><Link to='/' onClick={bodyclick}>Home</Link></li>
          <li><Link to='/AboutUs' onClick={bodyclick}>About Us</Link></li>
          <li><Link to='/Services' onClick={bodyclick}>Services</Link></li>
          <li><Link to='/Gallery' onClick={bodyclick}>Gallery</Link></li>
          <li><Link to='/Contact' onClick={bodyclick}>Contact Us</Link></li>
        </ul>
        
      </nav>
    </div>
    </>
  )
}

export default Nav
