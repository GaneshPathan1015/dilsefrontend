import React, { useState } from 'react';

const LoadingDots = () => {
  const [activeLoader, setActiveLoader] = useState(1);

  const styles = {
    container: {
      minHeight: '80vh',
      // background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #db2777 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    },
    particles: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
    },
    particle: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      position: 'relative',
      zIndex: 1,
    },
    title: {
      color: 'white',
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '0.5rem',
      margin: '0 0 0.5rem 0',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      letterSpacing: '-0.5px',
    },
    subtitle: {
      color: 'rgba(255, 255, 255, 0.95)',
      fontSize: '1.2rem',
      margin: 0,
      fontWeight: '300',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
    },
    btn: {
      padding: '1rem 2rem',
      background: 'rgba(255, 255, 255, 0.15)',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      borderRadius: '50px',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    btnActive: {
      background: 'linear-gradient(135deg, #fff, #f0f0f0)',
      color: '#7c3aed',
      borderColor: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 12px 40px rgba(255, 255, 255, 0.3)',
    },
    loaderContainer: {
      background: 'rgba(255, 255, 255, 0.98)',
      padding: '5rem 7rem',
      borderRadius: '30px',
      boxShadow: '0 30px 90px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      minWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2.5rem',
      position: 'relative',
      zIndex: 1,
      backdropFilter: 'blur(10px)',
    },
    loadingText: {
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      fontSize: '1.2rem',
      fontWeight: '600',
      margin: 0,
      letterSpacing: '0.5px',
    },
    loader1: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      height: '50px',
    },
    loader2: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      height: '50px',
    },
    loader3: {
      display: 'flex',
      gap: '0.7rem',
      alignItems: 'center',
      height: '50px',
    },
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes bounce1 {
          0%, 80%, 100% { 
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          40% { 
            transform: scale(1.4) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes pulse2 {
          0%, 100% {
            transform: scale(0.4);
             box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
          }
          50% {
            transform: scale(1.6);
            box-shadow: 0 0 30px 10px rgba(219, 39, 119, 0.4);
          }
        }

        @keyframes wave3 {
          0%, 60%, 100% {
            transform: translateY(0) scale(1);
          }
          30% {
            transform: translateY(-30px) scale(1.2);
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 5px currentColor);
          }
          50% {
            filter: brightness(1.5) drop-shadow(0 0 20px currentColor);
          }
        }

        .dot-bounce {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #0d1723ff, #192f59ff);
          border-radius: 50%;
          animation: bounce1 1.4s infinite ease-in-out both;
          box-shadow: 0 5px 15px rgba(124, 58, 237, 0.4);
        }

        .dot-bounce:nth-child(1) {
          animation-delay: -0.32s;
        }

        .dot-bounce:nth-child(2) {
          animation-delay: -0.16s;
        }

        .dot-pulse {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: pulse2 1.5s infinite ease-in-out, glow 2s infinite ease-in-out;
        }

        .dot-pulse:nth-child(1) {
          animation-delay: 0s;
        }

        .dot-pulse:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot-pulse:nth-child(3) {
          animation-delay: 0.4s;
        }

        .dot-wave {
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: wave3 1.2s infinite ease-in-out;
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }

        .dot-wave:nth-child(1) {
          animation-delay: 0s;
        }

        .dot-wave:nth-child(2) {
          animation-delay: 0.1s;
        }

        .dot-wave:nth-child(3) {
          animation-delay: 0.2s;
        }

        .dot-wave:nth-child(4) {
          animation-delay: 0.3s;
        }

        .dot-wave:nth-child(5) {
          animation-delay: 0.4s;
        }

        .btn-hover:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
        }

        .btn-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-hover:hover::before {
          width: 300px;
          height: 300px;
        }

        .particle {
          animation: float 8s infinite ease-in-out;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .loading-shimmer {
          position: relative;
        }

        .loading-shimmer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.particles}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                ...styles.particle,
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>

        {/* <div style={styles.buttonGroup}>
          <button 
            className="btn-hover"
            style={{...styles.btn, ...(activeLoader === 1 ? styles.btnActive : {})}}
            onClick={() => setActiveLoader(1)}
          >
            🎯 Bouncing Dots
          </button>
          <button 
            className="btn-hover"
            style={{...styles.btn, ...(activeLoader === 2 ? styles.btnActive : {})}}
            onClick={() => setActiveLoader(2)}
          >
            💫 Pulsing Dots
          </button>
          <button 
            className="btn-hover"
            style={{...styles.btn, ...(activeLoader === 3 ? styles.btnActive : {})}}
            onClick={() => setActiveLoader(3)}
          >
            🌊 Wave Dots
          </button>
        </div> */}

        <div style={styles.loaderContainer} className="loading-shimmer">
          {activeLoader === 1 && (
            <div style={styles.loader1}>
              <div className="dot-bounce"></div>
              <div className="dot-bounce"></div>
              <div className="dot-bounce"></div>
            </div>
          )}

          {activeLoader === 2 && (
            <div style={styles.loader2}>
              <div className="dot-pulse"></div>
              <div className="dot-pulse"></div>
              <div className="dot-pulse"></div>
            </div>
          )}

          {activeLoader === 3 && (
            <div style={styles.loader3}>
              <div className="dot-wave"></div>
              <div className="dot-wave"></div>
              <div className="dot-wave"></div>
              <div className="dot-wave"></div>
              <div className="dot-wave"></div>
            </div>
          )}
          
          <p style={styles.loadingText}>Loading data...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingDots;