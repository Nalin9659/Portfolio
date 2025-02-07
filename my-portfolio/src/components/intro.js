import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/IMG_1126.JPEG'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css';
const intro = () => {
    const scrollToContact= ()=>{
        const contactScetion= document.getElementById('contact');
        if (contactScetion){
            contactScetion.scrollIntoView({behaviour: 'smooth'})
        }
    }
  return(
    <section id="intro" className="bg-light py-5 d-flex align-item-center" style={{minHeight: '100vh'}}>
        <Container>
          <Row className="  justify-content-center text-center">
            <Col xs= {12} md={6} className="text-center">
            
              <Image
                src={profileImage}
                alt="Profile"
                roundedCircle
                fluid
                style={{ width: '260px', height: '260px', objectFit: 'cover', padding: '0px', 
                         position: 'relative', borderRadius: '50%', top: '20px',
                         background: 'linear gradient(270dg, #ff007a, #007af, #0f8)' }}
              />
               <br></br>
             <span> <h2 className='mt-3'><b>Nalin Patel</b></h2> </span>
                
             <h5>Software Engineer</h5>
             <br></br>
             <p>
                <a href="https://github.com/yourusername" target='_blank' rel='noreferrer'></a>
                <FaGithub size={35}/>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener"></a>
                <FaLinkedin size={35}/>
                
                <br></br>
             </p>
             <button className='btn-primary' type='button' onClick={scrollToContact}><b>Contact Me</b></button>
             <a href='/assets/Nalin CV(2).docx' download="Nalin CV(2).docx">
             <button className='btn-secondary'><b>Download CV</b></button></a>
            </Col>
          <Col md={8}></Col>
         </Row>
        </Container>
    </section>
 )

}
export default intro;