import React from 'react'

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Kodchasan', marginTop: 50, }}>
      <h1 style={{ fontSize: '6rem', margin: 0, textAlign: 'center' }}><span style={{ color: '#FCAB2B' }}>Contacts</span></h1>
      <div style={{ display: 'flex' }}>
        <table>
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
        </table>
        <form action='mailto:hukbathelachola2311@gmail.com' style={{margin:'auto'}}>
          <h1>Comment</h1>
          <input style={{height:30,width:245,margin:5}} type='text' name='fname' placeholder='First Name'/>
          <input style={{height:30,width:245,margin:5}} type='text' name='sname' placeholder='Second Name'/><br></br>
          <input style={{height:30,width:508,margin:5}} type='text' name='email' placeholder='Email'/><br></br>
          <textarea name='comment' rows='10' cols='67' style={{margin:5}} placeholder='Comment here....'></textarea><br></br>
          <input style={{marginLeft:390, cursor:'pointer',display: 'block', fontFamily: 'Kodchasan', backgroundColor: '#FCAB2B', color: '#fff', borderRadius: 5, border: 'none', padding: 7, paddingLeft: 25, paddingRight: 25, fontSize: '1.5rem', marginTop: 15, }} type="submit"/>
          </form>


      </div>
    </div>
  )
}

export default Contact