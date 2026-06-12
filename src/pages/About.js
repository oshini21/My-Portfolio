import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  const technicalSkills = ['Excel', 'SQL', 'Python', 'Figma', 'Microsoft Office', 'Core IT Fundamentals'];
  const professionalSkills = ['Communication', 'Leadership', 'Teamwork', 'Problem Solving', 'Critical Thinking', 'Time Management'];
  const interests = ['Business Analysis', 'Project Management', 'Data Analytics', 'Data Science', 'UI/UX Design'];

  return (
    <div className={styles.aboutPage}>
      <div className={styles.sectionHeading}>
        <h1>About Me</h1>
        <div className={styles.underline}></div>
      </div>

      {/* Main Narrative Profile Content Summary Card */}
      <div className={styles.bioCard}>
        <p>
          I am an IT undergraduate student at the Institute of Technology, University of Moratuwa with a strong interest 
          in Business Analysis, Project Management, and Data Science. I enjoy bridging the gap between technical logic 
          and business value by solving problems, analyzing data, and creating solutions that improve user experiences 
          and business outcomes. I am actively seeking internship opportunities to gain practical industry experience.
        </p>
      </div>

      {/* Education Timeline Node block mapping */}
      <div className={styles.innerSection}>
        <h2 className={styles.subHeading}>Education</h2>
        <div className={styles.educationContainer}>
          
          <div className={styles.educationCard}>
            <div className={styles.eduIcon}>🎓</div>
            <div>
              <h3>Institute of Technology, University of Moratuwa</h3>
              <p className={styles.degree}>Higher National Diploma (NDT) in Information Technology</p>
              <p className={styles.statusTag}>Undergraduate Student</p>
            </div>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.eduIcon}>🏫</div>
            <div>
              <h3>Rajapaksha Central College</h3>
              <p className={styles.degree}>G.C.E. Advanced Level (Physical Science)</p>
              <p className={styles.statusTag}>Completed: 2022 | Results: 3 C Passes</p>
            </div>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.eduIcon}>🏫</div>
            <div>
              <h3>Rajapaksha Central College</h3>
              <p className={styles.degree}>G.C.E. Ordinary Level</p>
              <p className={styles.statusTag}>Completed: 2018 | Results: 8 A Passes &amp; 1 S Pass</p>
            </div>
          </div>

        </div>
      </div>

      {/* Structured grid separation map container for layout skills tracking */}
      <div className={styles.innerSection}>
        <h2 className={styles.subHeading}>Skills Inventory</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategoryCard}>
            <h3>Technical Capabilities</h3>
            <div className={styles.badgeContainer}>
              {technicalSkills.map(skill => (
                <span key={skill} className={styles.techBadge}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillCategoryCard}>
            <h3>Professional Strengths</h3>
            <div className={styles.badgeContainer}>
              {professionalSkills.map(skill => (
                <span key={skill} className={styles.profBadge}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Career Focus Framework Intersections */}
      <div className={styles.innerSection}>
        <h2 className={styles.subHeading}>Core Career Horizons</h2>
        <div className={styles.interestsContainer}>
          {interests.map(interest => (
            <div key={interest} className={styles.interestTag}>
              <span className={styles.dot}></span> {interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;