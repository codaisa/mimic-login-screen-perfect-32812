

const NeonEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
      {/* Primary neon glow - fixed at bottom center */}
      <div 
        className="absolute w-96 h-96 animate-pulse-glow"
        style={{
          left: 'calc(50% - 192px)',
          bottom: '-100px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.068) 0%, rgba(147,51,234,0.102) 30%, rgba(147,51,234,0.034) 60%, transparent 100%)',
          filter: 'blur(40px)',
          animationDuration: '3s'
        }}
      />
      
      {/* Secondary neon glow - fixed at bottom center */}
      <div 
        className="absolute w-64 h-64 animate-pulse-glow"
        style={{
          left: 'calc(50% - 128px)',
          bottom: '-50px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.051) 0%, rgba(168,85,247,0.085) 40%, transparent 70%)',
          filter: 'blur(30px)',
          animationDuration: '4s',
          animationDelay: '0.5s'
        }}
      />
      
      {/* Inner bright core - fixed at bottom center */}
      <div 
        className="absolute w-32 h-32 animate-pulse-glow"
        style={{
          left: 'calc(50% - 64px)',
          bottom: '0px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.034) 0%, rgba(196,181,253,0.051) 50%, transparent 70%)',
          filter: 'blur(20px)',
          animationDuration: '2.5s',
          animationDelay: '1s'
        }}
      />
      
      {/* Subtle outer glow - fixed at bottom center */}
      <div 
        className="absolute w-80 h-80 animate-pulse-glow"
        style={{
          left: 'calc(50% - 160px)',
          bottom: '-80px',
          background: 'radial-gradient(circle, transparent 0%, rgba(147,51,234,0.017) 30%, rgba(147,51,234,0.0085) 60%, transparent 100%)',
          filter: 'blur(60px)',
          animationDuration: '5s',
          animationDelay: '1.5s'
        }}
      />
    </div>
  );
};

export default NeonEffects;

