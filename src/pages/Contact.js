import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  // Use state to capture dynamic inputs securely within React
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Update specific fields dynamically when typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Captured Form Payload:', formData);
    setSubmitted(true);
    
    // Clear inputs out completely post-submission
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.sectionHeading}>
        <h1>Let's Connect</h1>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.contactLayout}>
        {/* Info Grid Cards Block Column */}
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p className={styles.introText}>
            I am actively looking for internship positions or project collaborations where I can contribute my knowledge 
            in IT logic, data transformations, and product design. Drop a note or connect anytime!
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h4>Location</h4>
                <p>Homagama, Sri Lanka</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h4>Email Contact</h4>
                <p><a href="mailto:hewagamageoshinikumari@gmail.com">hewagamageoshinikumari@gmail.com</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>🔗</span>
              <div>
                <h4>Professional Networks</h4>
                <div className={styles.socialLinks}>
                  <a href="https://www.linkedin.com/in/oshini-hewagamage-689984316" target="_blank" rel="noreferrer" className={styles.socialBtn}>LinkedIn</a>
                  <a href="https://github.com/oshini21" target="_blank" rel="noreferrer" className={styles.socialBtn}>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Interactive state panel handler section */}
        <div className={styles.formContainer}>
          {submitted && (
            <div className={styles.successMessage}>
              ✨ Thank you, Oshini will reach out shortly!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;