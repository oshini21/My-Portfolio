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
  const [isSending, setIsSending] = useState(false);

  // Update specific fields dynamically when typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hewagamageoshinikumari@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSending(false);
    }
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
                  <a href="https://www.linkedin.com/in/oshini-hewagamage-689984316" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/oshini21" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.7c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.9 380.2c-1.9 1.2-1.4 2.9.3 4 .3.3 1.9 0 2.6-.9 2.3-1.9 1.5-3.9-.3-4.3-1.4-.4-1.8.3-2.6 1.2zm-14.8-11.7c-.3 1.5 1.1 2.7 2.9 2.7.5-.3 1.9-.9 2.2-1.8.3-1.5-1.1-2.7-3-2.7-.8.3-1.8.6-2.1 1.8zm24.2 21.9c-1.6 1.6-1.3 3.6.3 4.9 1.8 1 3.6 0 4.9-1.9.3-1.6 0-3.6-1.9-4.9-1.5-.7-2.9-.3-3.3.9zm-29-17.1c-.9.9-.6 2.6 1.1 3.8.9.9 2.6.9 3.5 0 .6-.9.3-2.6-1.2-3.8-.9-.9-2.6-.9-3.4 0z"></path>
                    </svg>
                    GitHub
                  </a>
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

            <button type="submit" className={styles.submitBtn} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;