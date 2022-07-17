import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="header"
      style={{
        position: 'sticky',
        top: 0,
        background: '#fff',
        padding: 25,
        zIndex: 11,
      }}
    >
      <h1
        className="heading"
        style={{
          display: 'inline',
          color: '#000',
          fontFamily: 'Kodchasan',
          fontSize: '1.5rem',
        }}
      >
        <b>HUKBATH EC</b>
      </h1>
      <nav
        className="navList"
        style={{
          display: 'inline',
          float: 'right',
          color: '#000',
          fontFamily: 'Kodchasan',
        }}
      >
        <span>
          <b>
            <Link to="/" style={{ all: 'unset', cursor: 'pointer' }}>
              Home
            </Link>
          </b>
        </span>
        <span className="span" style={{ cursor: 'pointer' }}>
          <b>
            <Link to="/about" style={{ all: 'unset' }}>
              About Me
            </Link>
          </b>
        </span>
        <span className="span" style={{ cursor: 'pointer' }}>
          <b>
            <Link to="/experience" style={{ all: 'unset' }}>
              Experience
            </Link>
          </b>
        </span>
        <span className="span" style={{ cursor: 'pointer' }}>
          <b>
            <Link to="/achievements" style={{ all: 'unset' }}>
              Achivementse
            </Link>
          </b>
        </span>
        <span className="span" style={{ cursor: 'pointer' }}>
          <b>
            <Link to="/skills" style={{ all: 'unset' }}>
              Skills
            </Link>
          </b>
        </span>
        <Link style={{ all: 'unset' }} to="/contact">
          <button
            className="span"
            style={{
              cursor: 'pointer',
              padding: 7,
              backgroundColor: 'transparent',
              borderRadius: '.5rem',
              fontFamily: 'Kodchasan',
              color: '#000',
            }}
          >
            <b>Contact Me</b>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
