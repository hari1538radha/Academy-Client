import React from 'react'
import image from '../Landing/Img/Rectangle 15.png';
import './detailPage.css'
function detailPage() {
  return (
    <div className='main-container-detailpage'>
    <div className='title-container'>
        <h1 className='title'>Java</h1>
        <p className='content-container'>Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm niled. Multirade lädirade lell. Kode jäkiren, 
            Lina Bengtsson. Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsum </p>
            <img className='detail-image'src={image}/>
            <p className='subcontent-container'>Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson. Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsum Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson. Robothandel pevis:
                 och al.lorem ipsum dipse ulti lorem iupsum Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm </p>
              <p className='see-more'> <a>See more</a></p>   
    </div>
    <div className='chapters-container'>
        
           <p><a href="">Chapters</a></p>
           <p><a href="">Machines</a></p>
           <p><a href="">Electrical</a></p>
            <p><a href="">Java</a></p>
            <p><a href="">C++</a></p>
            <p><a href="">Python</a></p>
            <p><a href="">Javascript</a></p>
            <p><a className='chapter-seemore-btn 'href="">SeeMore</a></p>
            
        
    </div>
    </div>
    

  )
}

export default detailPage