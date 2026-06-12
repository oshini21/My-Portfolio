import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  // Use state to keep track of which page view is currently mounted
  const [activePage, setActivePage] = useState('Home');

  // Helper functional logic to conditionally render the active page component
  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home setActivePage={setActivePage} />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Pass activePage state variables downwards so our navbar updates visually */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      {/* Content fills space dynamically between header and footer elements */}
      <main style={{ flex: 1, paddingTop: '70px' }}>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;