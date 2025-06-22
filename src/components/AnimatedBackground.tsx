'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    const background = backgroundRef.current;
    if (!background) return;

    // Create varied floating particles
    const createFloatingParticles = () => {
      const particleCount = 40;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Add variety to particle types
        const particleTypes = ['floating-particle', 'floating-star', 'floating-dot'];
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        particle.className = randomType;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration - reduced delay for immediate animation
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (8 + Math.random() * 12) + 's';
        
        // Force animation to start immediately
        particle.style.animationPlayState = 'running';
        
        // Random direction for some particles
        if (Math.random() > 0.5) {
          particle.style.animationDirection = 'reverse';
        }
        
        background.appendChild(particle);
      }
    };

    // Create geometric shapes
    const createGeometricShapes = () => {
      const shapeCount = 20;
      
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapes = ['floating-triangle', 'floating-circle', 'floating-square'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        shape.className = randomShape;
        
        // Random position
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration - reduced delay for immediate animation
        shape.style.animationDelay = Math.random() * 8 + 's';
        shape.style.animationDuration = (12 + Math.random() * 18) + 's';
        
        // Force animation to start immediately
        shape.style.animationPlayState = 'running';
        
        background.appendChild(shape);
      }
    };

    // Add some immediate particles with no delay
    const createImmediateParticles = () => {
      const immediateCount = 15;
      
      for (let i = 0; i < immediateCount; i++) {
        const particle = document.createElement('div');
        
        const particleTypes = ['floating-particle', 'floating-star', 'floating-dot'];
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        particle.className = randomType;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // No delay - start immediately
        particle.style.animationDelay = '0s';
        particle.style.animationDuration = (8 + Math.random() * 12) + 's';
        particle.style.animationPlayState = 'running';
        
        if (Math.random() > 0.5) {
          particle.style.animationDirection = 'reverse';
        }
        
        background.appendChild(particle);
      }
    };

    createImmediateParticles();
    createFloatingParticles();
    createGeometricShapes();

    // Enhanced mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const orbs = background.querySelectorAll('.gradient-orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.3;
        const x = (mouseX - 0.5) * speed * 25;
        const y = (mouseY - 0.5) * speed * 25;
        
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });

      // Add parallax effect to floating elements
      const floatingElements = background.querySelectorAll('.floating-emoji, .floating-triangle, .floating-circle, .floating-square');
      floatingElements.forEach((element, index) => {
        const speed = (index % 3 + 1) * 0.1;
        const x = (mouseX - 0.5) * speed * 10;
        const y = (mouseY - 0.5) * speed * 10;
        
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up created elements
      if (background) {
        const particles = background.querySelectorAll('.floating-particle, .floating-star, .floating-dot, .floating-emoji, .floating-triangle, .floating-circle, .floating-square');
        particles.forEach(particle => particle.remove());
      }
    };
  }, [isHydrated]);

  return (
    <div className="animated-background" ref={backgroundRef}>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </div>
  );
}
