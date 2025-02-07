import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaJs, FaReact, FaHtml5, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';

const skills = [
  { skill: 'JavaScript', level: 95, icon: <FaJs color="#f7df1e" /> },
  { skill: 'React.js', level: 90, icon: <FaReact color="#61DBFB" /> },
  { skill: 'HTML5 & CSS3', level: 95, icon: <FaHtml5 color="#E34F26" /> },
  { skill: 'Bootstrap', level: 80, icon: <SiBootstrap color="#7952B3" /> },
  { skill: 'Node.js', level: 80, icon: <FaNodeJs color="#68A063" /> },
  { skill: 'Python', level: 75, icon: <FaPython color="#306998" /> },
  { skill: 'Git & GitHub', level: 90, icon: <FaGitAlt color="#F05032" /> },
 
  
];

const Skills = () => (
  <section id="skills" className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-5">Skills</h2>
      <Row>
        {skills.map(({ skill, level, icon }) => (
          <Col md={6} key={skill} className="mb-4">
            <div className="d-flex align-items-center mb-2">
              <span className="me-3" style={{ fontSize: '1.8rem' }}>{icon}</span>
              <h5 className="mb-0">{skill}</h5>
            </div>
            <ProgressBar 
              now={level} 
              label={`${level}%`} 
              style={{ height: '10px' }} 
              variant={level >= 90 ? "success" : level >= 80 ? "info" : "warning"}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
