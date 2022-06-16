import React from 'react'

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Kodchasan', marginTop: 50, }}>
      <h1 className='fontHead'><span style={{ color: '#FCAB2B' }}>Contacts</span></h1>
      <div style={{ maxWidth: 1200, marginLeft: 'auto', margin: 'auto' }}>
        <table>
          <tbody>
          <tr style={{ height: 70 }}>
            <td><img alt='whatsapp' src='icwhatsapp.png' style={{}}></img></td>
            <td style={{ textAlign: 'left', padding: 5 }}><b><a style={{ all: 'unset' }} href="https://api.whatsapp.com/send?phone=9633373457&text=Hello%2C%20World!">9633373457</a></b><br></br></td>

          </tr>
          <tr style={{ height: 70 }}>
            <td><img alt='gmail' src='icgmail.png'></img></td>
            <td style={{ textAlign: 'left', padding: 5 }}><b><a style={{ all: 'unset' }} href="mailto:hukbathelachola2311@gmail.com">hukbathelachola2311@gmail.com</a></b><br></br></td>
          </tr>
          <tr style={{ height: 70 }}>
            <td><img alt='linked in' src='iclinkedin.png'></img></td>
            <td style={{ textAlign: 'left', padding: 5 }}><b><a style={{ all: 'unset' }} href='https://www.linkedin.com/in/hukbath-ec-11ba061b6/'>hukbath ec</a></b><br></br></td>
          </tr>
          <tr style={{ height: 70 }}>
            <td><img alt='facebook' src='icfacebook.png'></img></td>
            <td style={{ textAlign: 'left', padding: 5 }}><b><a style={{ all: 'unset' }} href='https://www.facebook.com/hukbath.ec/'>hukbath.ec</a></b><br></br></td>
          </tr>
          <tr style={{ height: 70 }}>
            <td><img alt='github' src='icgithub.png'></img></td>
            <td style={{ textAlign: 'left', padding: 5 }}><b><a style={{ all: 'unset' }} href='https://github.com/HuKKu-ec'>HuKKu-ec</a></b><br></br></td>
          </tr>
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default Contact