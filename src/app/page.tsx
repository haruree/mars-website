'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

export default function HomePage() {  useEffect(() => {
    // Add scroll-based animation for feature cards
    const checkScroll = () => {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = cardTop < window.innerHeight - 100;
          if (cardVisible && !card.classList.contains('animated')) {
          card.classList.add('animated');
          (card as HTMLElement).style.animation = 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }
      });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <AnimatedBackground />
      
      {/* Header */}
      <div className="container">
        <header className="header">
          <Link className="logo" href="/">
            <h1>Mars~ ✨</h1>
          </Link>

          <nav className="nav">
            <Link href="/commands">Commands</Link>
            <Link href="#">Docs</Link>
            <Link href="https://discord.com/oauth2/authorize?client_id=714301751855153174&permissions=8&integration_type=0&scope=bot" target="_blank">Invite</Link>
            <Link href="#">Status</Link>
          </nav>

          <div className="header-actions">
            <button className="menu-button">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
            <button className="discord-button">
              <svg width="22" height="22" viewBox="0 0 640 512" fill="currentColor">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83a1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
              </svg>
              <span>Support</span>
            </button>
          </div>
        </header>
      </div>

      <hr className="divider" />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Meet Mars~ ✨</h1>
              <p className="hero-subtitle">
                A versatile Discord bot that understands natural language and brings magic to your server. 
                From AI conversations to economy systems, Mars does it all~ &gt;///&lt;
              </p>
              <div className="hero-buttons">
                <Link 
                  href="https://discord.com/oauth2/authorize?client_id=714301751855153174&permissions=8&integration_type=0&scope=bot" 
                  target="_blank"
                  className="btn-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 640 512" fill="currentColor">
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83a1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                  </svg>
                  Add to Discord
                </Link>
                <Link href="/commands" className="btn-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m7 11 2-2-2-2"></path>
                    <path d="M11 13h4"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  </svg>
                  View Commands
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2 className="features-title">Why Choose Mars?</h2>
            <p className="features-subtitle">
              Discover the magical features that make Mars the perfect companion for your Discord server~
            </p>
            
            <div className="features-grid">
              {[
                {
                  icon: '🤖',
                  title: 'Natural Language AI',
                  description: 'Simply mention Mars and have natural conversations. The bot understands context and responds intelligently to your requests.'
                },
                {
                  icon: '🎨',
                  title: 'Image Generation',
                  description: 'Create stunning custom images from text descriptions. Bring your imagination to life with AI-powered art generation.'
                },
                {
                  icon: '💰',
                  title: 'Economy System',
                  description: 'Engage your community with a complete economy featuring daily rewards, foraging, brewing, shopping, and more magical activities.'
                },
                {
                  icon: '🌦️',
                  title: 'Weather Updates',
                  description: 'Get real-time weather information for any location worldwide. Stay informed about the weather in your area or anywhere else.'
                },
                {
                  icon: '📊',
                  title: 'Interactive Polls',
                  description: 'Create engaging polls with multiple options to gather opinions from your community and make collaborative decisions.'
                },
                {
                  icon: '📢',
                  title: 'Channel Management',
                  description: 'Easily create and manage text or voice channels with simple commands. Organize your server effortlessly.'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="feature-card"
                  style={{ opacity: 0 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="stats">
              <div className="stats-grid">
                {[
                  { number: '50+', label: 'Commands' },
                  { number: '24/7', label: 'Uptime' },
                  { number: '∞', label: 'Magic' },
                  { number: '🌟', label: 'Dreams' }
                ].map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
