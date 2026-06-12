import React from 'react';
import styles from '../styles/Home.module.css';
import profilePhoto from '../assets/mine2.png'; 

function Home({ setActivePage }) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h2 className={styles.subTitle}>Welcome to my space</h2>
        <h1 className={styles.mainTitle}>Oshini Hewagamge</h1>
        <h3 className={styles.roleTitle}>
          IT Undergraduate Exploring Business Analysis, project Management & Data Science
        </h3>
        
        <p className={styles.objective}>
          Aspiring Business Analyst and Project Management enthusiast passionate about data-driven decision-making, 
          problem-solving, and creating impactful solutions. Seeking opportunities to learn, grow, and contribute 
          through internships in Business Analysis, Project Management, and Data Analytics.
        </p>

        {/* This wrapper div is crucial for button spacing */}
        <div className={styles.ctaButtons}>
          <button 
            className={styles.primaryBtn} 
            onClick={() => setActivePage('Projects')}
          >
            View My Projects
          </button>
          <button 
            className={styles.secondaryBtn} 
            onClick={() => setActivePage('Contact')}
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img 
          src={profilePhoto} 
          alt="Oshini Hewagamge Professional Headshot" 
          className={styles.profileImage} 
        />
      </div>
    </div>
  );
}

export default Home;