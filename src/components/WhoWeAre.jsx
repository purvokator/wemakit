import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: { 
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Feature cards data
  const features = [
    {
      title: 'Simple platform',
      description: 'Manage your request & communicate with your designer use our platform',
      img: '/images/features/feature-platform.png',
      img2x: '/images/features/feature-platform@2x.png'
    },
    {
      title: 'Fixed monthly rate',
      description: 'Unlimited requests & revisions, same price.',
      img: '/images/features/feature-pricing.png',
      img2x: '/images/features/feature-pricing@2x.png'
    },
    {
      title: 'Flexible & scalable',
      description: 'Easily manage your design queue with a Trello board.',
      img: '/images/features/feature-scalable.png',
      img2x: '/images/features/feature-scalable@2x.png'
    },
  ];
  

  return (
    <section style={styles.section} ref={sectionRef}>
      <div style={styles.contentContainer}>
        {/* Main Content Block */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildren}
          style={styles.mainContent}
          whileHover={{
            transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)',
            boxShadow: '0 40px 60px -20px rgba(0,0,0,0.15)'
          }}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 15,
            hover: { duration: 0.3 }
          }}
        >
          <motion.p style={styles.description}>
            {[
              { text: "Wemakit", highlight: true },
              { text: " is an on-demand design agency based in Singapore. Unlike many others, it’s a truly designer-owned agency, backed by over 15 years of experience in the design industry. We turn your ideas into reality with ", highlight: false },
              { text: "top-tier quality", highlight: true },
              { text: " and an exceptionally ", highlight: false },
              { text: "efficient", highlight: true },
              { text: " turnaround time.", highlight: false },
            ].map(({ text, highlight }, index) => (
              <motion.span
                key={index}
                variants={textVariants}
                style={{
                  ...(highlight ? styles.highlight : styles.text),
                  display: 'inline-block',
                }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                {text}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          style={styles.benefitsContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.div 
            style={styles.benefitsHeading}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1]
                }
              }
            }}
          >
            <motion.h3 
              style={styles.subtitle}
              whileHover={{
                backgroundSize: '100% 2px',
                backgroundPosition: '0 100%'
              }}
            >
              BENEFITS
            </motion.h3>
          </motion.div>
          
          <motion.div 
            style={styles.benefitsContent}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.h2 style={styles.heading}>
              <motion.span variants={textVariants}>
                You won’t want<br />
              </motion.span>
              <motion.span 
                style={styles.italic}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                anything
              </motion.span>
              <motion.span variants={textVariants}> else.</motion.span>
            </motion.h2>
          </motion.div>

          <motion.p 
            style={styles.benefitsText}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Say goodbye to unreliable freelancers and overpriced agencies—get top-quality design for a flat monthly fee
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          style={styles.featuresContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {features.map((feature, index) => (
  <motion.div 
    key={index}
    variants={cardVariants}
    style={styles.featureCard}
    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
    whileHover={{ y: -10 }}
  >
    <div style={styles.imageContainer}>
      <img 
        src={`${process.env.PUBLIC_URL}${feature.img}`} 
        srcSet={`${process.env.PUBLIC_URL}${feature.img} 1x, ${process.env.PUBLIC_URL}${feature.img2x} 2x`}
        alt={feature.title}
        style={styles.featureImage}
        loading="lazy"
      />
    </div>
    <h3 style={styles.featureTitle}>{feature.title}</h3>
    <p style={styles.featureDescription}>{feature.description}</p>
  </motion.div>
))}
        </motion.div>
      </div>
    </section>
  );
};

// Style constants
const colors = {
  primary: '#FB810A',
  black: '#000000',
  grey: '#99948F',
};

const typography = {
  heading: {
    desktop: 'clamp(42px, 5vw, 61px)',
    mobile: '38px',
    lineHeight: '1.2',
  },
  text: {
    size: 'clamp(16px, 1.8vw, 20px)',
    mobileSize: '16px',
    lineHeight: '1.6',
  },
  subtitle: {
    size: 'clamp(12px, 1vw, 14px)',
    lineHeight: '1.5',
  },
  featureTitle: {
    size: '22px',
    mobileSize: '18px',
    lineHeight: '1.1',
  },
  featureText: {
    size: '14px',
    mobileSize: '12px',
    lineHeight: '1.4',
  },
};

const styles = {
  section: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '100px 40px',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      padding: '60px 20px',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '120px',
    '@media (max-width: 768px)': {
      gap: '60px',
    },
  },
  mainContent: {
    width: '100%',
    maxWidth: '800px',
    padding: '60px 5vw',
    borderRadius: '24px',
    backgroundColor: '#FFF5ED',
    willChange: 'transform',
    transform: 'perspective(1000px)',
    cursor: 'default',
    '@media (max-width: 768px)': {
      padding: '40px 20px',
      borderRadius: '16px',
    },
  },
  description: {
    fontSize: typography.text.size,
    lineHeight: typography.text.lineHeight,
    textAlign: 'center',
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: typography.text.mobileSize,
    },
  },
  highlight: {
    color: colors.primary,
    fontFamily: "'Behind The Nineties', sans-serif",
    fontStyle: 'italic',
    fontSize: 'clamp(20px, 2.2vw, 24px)',
    position: 'relative',
    display: 'inline-block',
    transition: 'color 0.3s ease',
    padding: '0 8px',
    margin: '0 2px',
    '@media (max-width: 768px)': {
      fontSize: '18px',
      padding: '0 4px',
    },
  },
  text: {
    color: colors.black,
    fontFamily: "'San Francisco Text', sans-serif",
    letterSpacing: '-0.02em',
  },
  benefitsContainer: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },
  benefitsHeading: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '40px',
      height: '2px',
      backgroundColor: colors.primary,
      transition: 'width 0.3s ease',
    },
  },
  subtitle: {
    fontSize: typography.subtitle.size,
    lineHeight: typography.subtitle.lineHeight,
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '0 auto',
    color: colors.black,
    fontFamily: "'San Francisco Text', sans-serif",
    fontWeight: '500',
    letterSpacing: '2px',
    background: `linear-gradient(${colors.primary}, ${colors.primary}) no-repeat 0 100%`,
    backgroundSize: '0% 2px',
    transition: 'background-size 0.6s ease',
  },
  benefitsContent: {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
  },
  heading: {
    fontSize: typography.heading.desktop,
    lineHeight: typography.heading.lineHeight,
    margin: '0.5em 0',
    color: colors.black,
    fontFamily: "'San Francisco Text', sans-serif",
    fontWeight: '500',
    '@media (max-width: 768px)': {
      fontSize: typography.heading.mobile,
    },
  },
  italic: {
    fontFamily: "'Behind The Nineties', sans-serif",
    fontStyle: 'italic',
    display: 'inline-block',
    position: 'relative',
    padding: '0 8px',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: '12px',
      background: '#FB810A33',
      transform: 'translateY(-50%)',
      zIndex: -1,
    },
  },
  benefitsText: {
    width: '100%',
    maxWidth: '600px',
    fontSize: 'clamp(16px, 1.8vw, 20px)',
    lineHeight: '1.6',
    textAlign: 'center',
    color: colors.grey,
    margin: 0,
    fontFamily: "'San Francisco Text', sans-serif",
    letterSpacing: '-0.01em',
    '@media (max-width: 768px)': {
      fontSize: '16px',
      padding: '0 20px',
    },
  },
  featuresContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '60px auto 0',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    '@media (max-width: 768px)': {
      gap: '30px',
      gridTemplateColumns: '1fr',
    },
  },
  featureCard: {
    position: 'relative',
    paddingBottom: '40px',
    textAlign: 'center',
  },
  imageContainer: {
    width: '200px',
    height: '200px',
    margin: '0 auto 32px',
    borderRadius: '4px 4px 90px 90px',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      width: '160px',
      height: '160px',
    },
  },  
  featureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    padding: '20px',
  },
  featureTitle: {
    fontSize: typography.featureTitle.size,
    lineHeight: typography.featureTitle.lineHeight,
    color: colors.black,
    fontFamily: "'San Francisco Text', sans-serif",
    fontWeight: '500',
    margin: '0 0 16px',
    '@media (max-width: 768px)': {
      fontSize: typography.featureTitle.mobileSize,
    },
  },
  featureDescription: {
    fontSize: typography.featureText.size,
    lineHeight: typography.featureText.lineHeight,
    color: colors.grey,
    fontFamily: "'San Francisco Text', sans-serif",
    fontWeight: '400',
    margin: '0',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      fontSize: typography.featureText.mobileSize,
    },
  },
};

export default WhoWeAre;