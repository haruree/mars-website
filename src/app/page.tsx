'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>✨ New: Natural Language AI Support</span>
              </div>
              <h1 className="hero-title">
                Let <span className="hero-brand">Mars</span><span className="sparkle">✨</span> handle it for you!
              </h1>              <p className="hero-description">
                Your magical Discord companion bringing AI-powered conversations, fun interactions, 
                and dreamy experiences to your server~
              </p><div className="hero-buttons">
                <Link 
                  href="https://discord.com/oauth2/authorize?client_id=714301751855153174&permissions=8&integration_type=0&scope=bot" 
                  target="_blank"
                  className="btn-primary"
                >
                  Add to Discord
                </Link>                <Link 
                  href="https://github.com/haruree" 
                  target="_blank"
                  className="btn-secondary"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-container">
                <Image 
                  src="/star.png" 
                  alt="Mars Bot"
                  width={400}
                  height={400}
                  className="hero-image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-container">            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                  </svg>
                </div>
                <h3 className="feature-title">AI Powered</h3>
                <p className="feature-description">
                  Natural language understanding with advanced AI capabilities for smarter interactions.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="feature-title">Moderation Tools</h3>
                <p className="feature-description">
                  Keep your server safe with powerful moderation features and automated systems.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3 className="feature-title">Fun Commands</h3>
                <p className="feature-description">
                  Entertaining commands and games to keep your community engaged and active.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
