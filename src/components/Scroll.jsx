import React, { useState, useEffect } from 'react';

function Scroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 200); // Show button after scrolling 200px
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional for smooth scrolling
    });
  };

  return (
    <button
      className="scroll-to-top"
      style={{ display: showButton ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      Click to scroll to top
    </button>
  );
}

export default Scroll;