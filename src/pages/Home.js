import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='ContainerDiv'>
      <div className='homeContainer' >
        <h1 className='heading'>Hy! I Am</h1>
        <h1 className='heading'>Hukbath Ec</h1>
        <p className='subHeading'>Web Developer | App Developer | UI/UX Desighner</p>
        <Link to='/contact'><button className='hireButton'>
          Hire me
        </button></Link>
      </div>
      <div className='imageConatainer'>
        {/* <img style={{position:'absolute',}} src='icfacebook.png' alt='' /> */}
        <img src='pic.png' alt='' />

      </div>


    </div>
  )
}

export default Home