import React, { useEffect, useState } from 'react';

const ClientLogos = () => {
  const [isMobile, setIsMobile] = useState(false);

  const logos = [
    '/logos/client1.png',
    '/logos/client2.png',
    '/logos/client3.png',
    '/logos/client4.png',
    '/logos/client5.png'
  ];

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <section style={styles.section}>
      <style>{animation}</style>
      <div style={styles.topLine} />

      {!isMobile ? (
        <div style={styles.animationContainer}>
          <div style={styles.logosWrapper}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} style={styles.logoContainer}>
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  style={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={styles.mobileGrid}>
          {logos.map((logo, index) => (
            <div
              key={index}
              style={{
                ...styles.gridItem,
                ...(index === 4 ? styles.lastCentered : {})
              }}
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                style={styles.mobileLogoImage}
              />
            </div>
          ))}
        </div>
      )}

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
  animationContainer: {
    width: '1200px',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
  },
  logosWrapper: {
    display: 'flex',
    width: '200%',
    animation: 'scroll 15s linear infinite',
  },
  logoContainer: {
    flex: '0 0 170px',
    height: '42px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 14px',
  },
  logoImage: {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    transition: 'all 0.3s ease',
  },
  mobileGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px 20px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
  },
  lastCentered: {
    gridColumn: '1 / -1', // Span 2 columns
    justifyContent: 'center',
  },
  mobileLogoImage: {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    transition: 'all 0.3s ease',
    margin: '0 auto', // This makes it horizontally centered
  },
};

export default ClientLogos;
