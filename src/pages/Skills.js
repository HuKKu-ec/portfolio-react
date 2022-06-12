import React from 'react'

const Skills = () => {
  const img=[
    {
      src:'Figma.png'
    },
    {
      src:'React.png'
    },
    {
      src:'Firebase.png'
    },
    {
      src:'Github.png'
    },
    {
      src:'Photoshop.png'
    },
    {
      src:'Native.png'
    },
  ]
  
  return (
    <center><div style={{fontFamily:'Kodchasan',marginTop:50}}>
      <h1 className='fontHead'><span style={{color:'#FCAB2B'}}>Skills</span> that I learned</h1>
     {img.map((v,i)=>{
       return<img alt="something went wrong" style={{margin:50}} key={i} src={v.src}/>
     })}
      

    </div></center>
  )
}

export default Skills