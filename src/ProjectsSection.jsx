import React from 'react';
import { Zoom } from 'react-awesome-reveal';

function ProjectsSection() {
  const projects = [
    { name: 'Portfolio Website', description: 'A personal portfolio showcasing my skills and projects.' },
    { name: 'E-commerce Store', description: 'A scalable online store with React and Django backend.' },
  ];

  return (
    <section style={styles.projectsContainer}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Zoom triggerOnce key={index}>
            <div style={styles.projectCard}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
}

const styles = {
  projectsContainer: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'left',
  },
};

export default ProjectsSection;
