import React from 'react';

const ClientLogos = () => {
  // Original logos array (no duplicates needed)
  const logos = [
    '/logos/client1.png',
    '/logos/client2.png',
    '/logos/client3.png',
    '/logos/client4.png',
    '/logos/client5.png',
    '/logos/client1.png',
    '/logos/client2.png',
    '/logos/client3.png',
    '/logos/client4.png',
    '/logos/client5.png'
  ];

  return (
    <section style={styles.section}>
      <div style={styles.topLine} />
      
      <div style={styles.animationContainer}>
        <div style={styles.logosWrapper}>
          {/* Double the logos array for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} style={styles.logoContainer}>
              <img 
                src={logo} 
                alt={`Client ${index % logos.length + 1}`}
                style={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bottomLine} />
    </section>
  );
};

const animation = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  animationContainer: {
    width: '1200px',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
  },
  logosWrapper: {
    display: 'flex',
    width: '200%', // Double width for seamless loop
    animation: 'scroll 15s linear infinite', // Faster animation (20s)
  },
  logoContainer: {
    flex: '0 0 170px', // Reduced from 240px (240 * 0.7 = 168 ≈ 170)
    height: '42px',    // Reduced from 60px (60 * 0.7 = 42)
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 14px', // Reduced from 20px (20 * 0.7 = 14)
  },
  
  logoImage: {
    maxWidth: '80%',   // Added for better scaling
    maxHeight: '80%',  // Added for better scaling
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    transition: 'all 0.3s ease',
    ':hover': {
      filter: 'grayscale(0%)',
      transform: 'scale(1.1)',
    },
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '0.5px',
    backgroundColor: '#B2B6C9',
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '0.5px',
    backgroundColor: '#B2B6C9',
  },
};

// Add global animation styles
const GlobalStyle = () => (
  <style>
    {animation}
  </style>
);

export default () => (
  <>
    <GlobalStyle />
    <ClientLogos />
  </>
);