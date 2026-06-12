import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar({ activePage, setActivePage }) {
  // Keep track of mobile click state for our drop menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false); // Make sure mobile menu closes on click selection
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => handleNavClick('Home')}>
          <span>Oshini</span>
        </div>
        
        {/* Toggleable mobile hamburger icon lines */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></span>
        </div>

        {/* Dynamic mobile evaluation block using template literals */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.activeMenu : ''}`}>
          {navItems.map((item) => (
            <li 
              key={item} 
              className={activePage === item ? styles.activeLink : ''}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;