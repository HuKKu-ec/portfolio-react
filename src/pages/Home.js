import React from 'react'
const Home = () => {
  return (
    <div style={{ display: 'flex',alignItems:'center',justifyContent:'center' }}>
      <div style={{ fontFamily: 'Kodchasan', marginTop: 0 }}>
        <h1 style={{ fontSize: '6rem', marginBottom: 0 }}>Hy! I Am</h1>
        <h1 style={{ color: '#FCAB2B', fontSize: '6rem', margin: 0 }}>Hukbath Ec</h1>
        <p style={{ fontSize: '1.5rem', marginTop: 0 }}>Web Developer | App Developer | UI/UX Desighner</p>
        <button style={{ fontFamily: 'Kodchasan', backgroundColor: '#FCAB2B', color: '#fff', borderRadius: 5, border: 'none', padding: 7, paddingLeft: 25, paddingRight: 25, fontSize: '1.5rem' }}>
          Hire me</button>
      </div>
      <div style={{  }}>
        {/* <img style={{position:'absolute',}} src='icfacebook.png' alt='' /> */}
        <img style={{float: 'right'}} src='pic.png' alt='' />

      </div>


    </div>
  )
}

export default Home