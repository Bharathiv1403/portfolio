import React, { useEffect, useState } from 'react';

export default function GlowFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  return (
    <div
      className="cursor-glow-spotlight"
      style={{
        transform: `translate(${pos.x - 225}px, ${pos.y - 225}px)`,
        opacity: visible ? 1 : 0
      }}
    />
  );
}
