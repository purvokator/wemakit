import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Jamal Hassim',
    position: 'CEO of BoltOS',
    profileImage: '/images/profile1.webp',
    companyLogo: '/images/logo1.png',
    text: 'Wemakit helps startup companies like us who need fast designs with good quality. With a reasonable budget we can get designs on time and with quality',
  },
  {
    name: 'Lenny Hartono',
    position: 'VP of Marketing at Multistrada',
    profileImage: '/images/profile2.jpg',
    companyLogo: '/images/logo2.webp',
    text: 'Very satisfied with the service provided. The process was fast, the design was satisfying, and the team was communicative. I will recommend to my colleagues!',
},
];

const Arrow = ({ onClick, direction }) => (
    <div
      onClick={onClick}
      style={{
        width: 34,
        height: 34,
        background: '#F8FAFF',
        border: '1px solid #E1E4ED',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'absolute',
        [direction === 'left' ? 'left' : 'right']: -50,
        top: 'calc(50% - 17px)',
        zIndex: 2,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6D758F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: direction === 'left' ? 'rotate(0deg)' : 'rotate(180deg)' }}
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
  );

const TestimonialCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: 'ease-in-out',
        beforeChange: (oldIndex, newIndex) => {
            console.log('Slider change:', oldIndex, '→', newIndex);
          },
          
      };
      
      

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: 40,
      position: 'relative',
      overflow: 'visible',
    }}>
      <div style={{ width: 785, position: 'relative' }}>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div style={{
                width: 785,
                height: 349,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 24,
                boxSizing: 'border-box',
                background: '#fff',
                borderRadius: 8,
                border: '1px solid #E1E4ED',
                boxShadow: '0px 6px 12px rgba(25, 33, 61, 0.08)',
                gap: 24,
                overflow: 'hidden', // cegah glitch shadow kanan
              }}>
                {/* Profile Image */}
                <img
                  src={t.profileImage}
                  alt={t.name}
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: 8,
                    objectFit: 'cover',
                    background: '#F1F3F7',
                    flexShrink: 0,
                  }}
                />

                {/* Right Content */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  flex: 1,
                }}>
                  {/* Logo */}
                  <img
                    src={t.companyLogo}
                    alt="Company Logo"
                    style={{
                      width: 150,
                      height: 'auto',
                      marginBottom: 24,
                    }}
                  />

                  {/* Text */}
                  <div style={{
                    color: '#99948F',
                    fontSize: 14,
                    lineHeight: '22px',
                    fontFamily: 'San Francisco Display, sans-serif',
                    marginBottom: 24,
                  }}>
                    {t.text}
                  </div>

                  {/* Name & Position */}
                  <div>
                    <div style={{
                      fontWeight: 600,
                      fontSize: 16,
                      color: '#000',
                      fontFamily: 'San Francisco Display, sans-serif',
                    }}>{t.name}</div>
                    <div style={{
                      fontSize: 16,
                      color: '#000',
                      fontFamily: 'San Francisco Display, sans-serif',
                    }}>{t.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
