import React from 'react';
import IntroScreen from '../sections/IntroScreen'; // Percorso corretto della cartella sections

export default function BatComputerTest() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: 'black' }}>
      {/* Sfondo Fisico della Caverna */}
      <img 
        src="/BatComputer.png" 
        alt="Batcave" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
      />

      {/* Posizionamento sul Monitor Centrale */}
      <div style={{ 
        position: 'absolute', 
        top: '42.5%', 
        left: '27.5%', 
        width: '45%', 
        height: '38%', 
        zIndex: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        
        {/* Wrapper Scalato Intermedio per simulare il Desktop a 1200px */}
        <div style={{ 
          width: '1200px', 
          height: '800px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          transform: 'scale(0.48) perspective(1000px) rotateX(4deg)', 
          transformOrigin: 'center',
          flexShrink: 0
        }}>
          <IntroScreen 
            onBegin={() => alert("Missione avviata!")} 
            isMuted={true}
          />
        </div>

      </div>
    </div>
  );
}
