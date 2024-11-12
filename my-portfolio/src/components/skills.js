import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { skill: 'JavaScript', level: 90 },
  { skill: 'React', level: 85 },
  { skill: 'HTML/CSS', level: 90 },
  { skill: 'Agile Methodologies', level: 75 }
];

const Skills = () => (
  <section id="skills" className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-5">Skills</h2>
      <Row>
        {skills.map(({ skill, level }) => (
          <Col md={6} key={skill} className="mb-3">
            <h5>{skill}</h5>
            <ProgressBar now={level} label={`${level}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
