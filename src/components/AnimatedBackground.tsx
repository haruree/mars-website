'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    // Create floating particles
    const createFloatingParticles = () => {
      const particleCount = 25;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random size
        const sizes = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        particle.classList.add(randomSize);
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        background.appendChild(particle);
      }
    };

    // Create sparkles
    const createSparkles = () => {
      const sparkleCount = 15;
      
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        
        background.appendChild(sparkle);
      }
    };

    createFloatingParticles();
    createSparkles();

    // Mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const orbs = background.querySelectorAll('.gradient-orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up created elements
      background.innerHTML = `
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      `;
    };
  }, []);

  return (
    <div className="animated-background" ref={backgroundRef}>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </div>
  );
}
