import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/skills" style={styles.link}>Skills</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Header;
