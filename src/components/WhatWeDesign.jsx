import { motion } from "framer-motion";

export default function WhatWeDesign() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{
        width: 1100,
        padding: 60,
        background: '#363636',
        borderRadius: 19,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'relative'
      }}>
        <div style={{ position: 'relative', height: 330 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: -10,
              left: '11%',
              transform: 'translateX(-50%)',
              maxWidth: 900,
              color: 'white',
              fontSize: 100,
              fontWeight: 1200,
              textAlign: 'center',
              lineHeight: '1.1',
              fontFamily: 'San Francisco Text'
            }}
          >
            One destination<br />for all your needs.
          </motion.h2>

          {[ 
            { label: 'Slide decks', x: 199, y: 77, bg: '#7B9CEF', color: 'black' },
            { label: 'Print design', x: 446, y: 167, bg: '#363636', color: 'white', border: true },
            { label: 'Brand guides', x: 715, y: 166, bg: '#F09AEB', color: 'black', border: true },
            { label: 'Logos', x: 624, y: 198, bg: '#FB810A', color: '#363636', rotate: -12 },
            { label: 'Web design', x: 173, y: 198, bg: '#FFDB01', color: 'black', border: true, rotate: 7 },
            { label: 'UI/UX design', x: 774, y: 271, bg: '#363636', color: 'white', border: true },
            { label: 'Social media', x: 787, y: 83, bg: '#6BD5D4', color: 'black' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.1,
                rotate: item.rotate ? item.rotate + 2 : 2,
                boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                position: 'absolute',
                left: item.x,
                top: item.y,
                transform: `rotate(${item.rotate || 0}deg)` + (item.center ? ' translateX(-50%)' : ''),
                background: item.bg,
                borderRadius: 1000,
                padding: '8px 17px',
                border: item.border ? '1px solid #E0D4D8' : 'none',
                color: item.color,
                fontSize: 14,
                fontFamily: 'San Francisco Text',
                fontWeight: 600,
                lineHeight: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
