import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={styles.contactContainer}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.description}>I'd love to hear from you! Fill out the form below:</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={styles.input}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
}

const styles = {
  contactContainer: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '30px',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
    height: '100px',
  },
  button: {
    backgroundColor: '#61dafb',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default ContactSection;
