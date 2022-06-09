import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div style={{ position: 'sticky', top: 0, background: '#fff', padding: 25,zIndex:1 }} >
      <h1 className='heading' style={{ display: 'inline', color: '#000', fontFamily: 'Kodchasan', fontSize: '1.5rem' }}>
        <b>HUKBATH EC</b>
      </h1>
      <nav style={{ display: 'inline', float: 'right', color: '#000', fontFamily: 'Kodchasan', }}>
        <span><b><Link to="/" style={{ all: 'unset',cursor:'pointer', }}>Home</Link></b></span>
        <span style={{ cursor:'pointer', marginLeft: 30 }}><b><Link to="/about" style={{ all: 'unset', marginLeft: 30 }}>About Me</Link></b></span>
        <span style={{ cursor:'pointer',marginLeft: 30 }}><b><Link to="/experience" style={{ all: 'unset' }}>Experience</Link></b></span>
        <span style={{ cursor:'pointer',marginLeft: 30 }}><b><Link to="/achievements" style={{ all: 'unset' }}>Achivementse</Link></b></span>
        <span style={{ cursor:'pointer',marginLeft: 30 }}><b><Link to="/skills" style={{ all: 'unset' }}>Skills</Link></b></span>
        <button style={{ cursor:'pointer',marginLeft: 30, padding: 7, backgroundColor: 'transparent', borderRadius: '.5rem', fontFamily: 'Kodchasan', color: '#000' }}>
          <Link style={{ all: 'unset' }} to="/contact"><b>Contact Me</b></Link></button>
      </nav>
    </div>
  )
}

export default Header