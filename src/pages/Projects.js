import React from 'react';
import styles from '../styles/Projects.module.css';
import charitapImg from '../assets/charitap.png';
import eventManagerImg from '../assets/event_manager.png';
import blogSystemImg from '../assets/blog_system.png';

function Projects() {
  const customProjects = [
    {
      id: 1,
      title: 'Charitap - Donation Platform',
      nature: 'Group Project',
      desc: 'A donation platform designed to connect donors with beneficiaries and improve transparency in the donation process.',
      image: charitapImg
    },
    {
      id: 2,
      title: 'University Event Management Website',
      nature: 'Individual Project',
      desc: 'A web-based application developed to manage university events, registrations, and event information.',
      image: eventManagerImg
    },
    {
      id: 3,
      title: 'Blog Management System',
      nature: 'Group Project',
      desc: 'A content management platform that allows users to create, edit, and manage blog posts efficiently.',
      image: blogSystemImg
    }
  ];

  return (
    <div className={styles.projectsPage}>
      <div className={styles.sectionHeading}>
        <h1>Projects Catalog</h1>
        <div className={styles.underline}></div>
      </div>

      {/* Grid container targeting layout card mappings */}
      <div className={styles.projectsGrid}>
        {customProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            </div>

            <div className={styles.cardHeader}>
              <span className={styles.folderIcon}>📁</span>
              <span className={styles.natureTag}>{project.nature}</span>
            </div>
            
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.desc}</p>
            
            <div className={styles.cardFooter}>
              <span className={styles.viewLink}>Read Breakdown &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;