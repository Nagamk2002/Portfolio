import React from 'react';
import { Fade } from 'react-awesome-reveal';

function IntroductionSection() {
  return (
    <section style={styles.container}>
      <Fade direction="left" triggerOnce>
        <h1 style={styles.heading}>Hi, I'm Nagabhushan M K</h1>
        <p style={styles.paragraph}>
          Welcome to my portfolio! I'm a passionate software developer specializing in web development.
        </p>
      </Fade>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: '#61dafb',
    color: '#333',
    padding: '100px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default IntroductionSection;
