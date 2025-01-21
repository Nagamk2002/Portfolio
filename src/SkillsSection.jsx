import React from 'react';
import { Fade } from 'react-awesome-reveal';

function SkillsSection() {
  const skills = [
    { name: 'HTML', color: '#e34c26' },
    { name: 'CSS', color: '#2965f1' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'React', color: '#61dafb' },
    { name: 'Python', color: '#306998' },
    { name: 'Git', color: '#f1502f' },
  ];

  return (
    <section style={styles.skillsContainer}>
      <Fade direction="up" triggerOnce>
        <h2 style={styles.heading}>My Skills</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={{ ...styles.skillItem, backgroundColor: skill.color }}>
              {skill.name}
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

const styles = {
  skillsContainer: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '15px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  skillItem: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default SkillsSection;
