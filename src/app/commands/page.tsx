'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './commands.module.css';

interface Command {
  name: string;
  description: string;
  arguments: string[];
  permissions: string[];
  category: string;
  emoji?: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const commands: Command[] = [
  // Economy Commands
  {
    name: 'balance',
    description: 'Check your dream dust balance or someone else\'s~',
    arguments: ['user (optional)'],
    permissions: ['none'],
    category: 'economy',
    emoji: '✨'
  },
  {
    name: 'daily',
    description: 'Claim your daily dream dust and bonus~',
    arguments: ['none'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🌅'
  },
  {
    name: 'forage',
    description: 'Gather items from the forest~',
    arguments: ['none'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🍄'
  },
  {
    name: 'brew',
    description: 'Combine items to create something magical~',
    arguments: ['recipe (optional)'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🧪'
  },
  {
    name: 'shop',
    description: 'Browse and buy magical items~',
    arguments: ['none'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🛍️'
  },
  {
    name: 'buy',
    description: 'Purchase an item from the shop~',
    arguments: ['item', 'amount (optional)'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🎀'
  },
  {
    name: 'sell',
    description: 'Sell an item from your inventory~',
    arguments: ['item', 'amount (optional)'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🌸'
  },
  {
    name: 'inventory',
    description: 'View your magical collection~',
    arguments: ['user (optional)'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🎒'
  },
  {
    name: 'gift',
    description: 'Share dream dust or items with friends~',
    arguments: ['user', 'item/amount'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🎁'
  },
  {
    name: 'profile',
    description: 'View your beautiful profile or someone else\'s~',
    arguments: ['user (optional)'],
    permissions: ['none'],
    category: 'economy',
    emoji: '👤'
  },
  {
    name: 'coinflip',
    description: 'Flip a coin and bet dream dust! Choose heads or tails~',
    arguments: ['choice', 'amount'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🪙'
  },
  {
    name: 'leaderboard',
    description: 'See who has the most dream dust~',
    arguments: ['none'],
    permissions: ['none'],
    category: 'economy',
    emoji: '🏆'
  },
  
  // Utility Commands
  {
    name: 'ping',
    description: 'Check my response time~',
    arguments: ['none'],
    permissions: ['none'],
    category: 'utility',
    emoji: '🏓'
  },
  {
    name: 'weather',
    description: 'Get weather for any location~',
    arguments: ['location'],
    permissions: ['none'],
    category: 'utility',
    emoji: '🌤️'
  },
  {
    name: 'poll',
    description: 'Create a beautiful poll~',
    arguments: ['question', 'options'],
    permissions: ['none'],
    category: 'utility',
    emoji: '📊'
  },
  {
    name: 'help',
    description: 'Get help with using Mars~',
    arguments: ['command (optional)'],
    permissions: ['none'],
    category: 'utility',
    emoji: '❓'
  },
  
  // Moderation Commands
  {
    name: 'purge',
    description: 'Delete multiple messages~',
    arguments: ['amount'],
    permissions: ['Manage Messages'],
    category: 'moderation',
    emoji: '🗑️'
  },
  {
    name: 'channel',
    description: 'Manage channels in the server~',
    arguments: ['action', 'name', 'options'],
    permissions: ['Manage Channels'],
    category: 'moderation',
    emoji: '📝'
  },
  
  // Roleplay Commands
  {
    name: 'hug',
    description: 'Give someone a warm hug~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🤗'
  },
  {
    name: 'kiss',
    description: 'Give someone a sweet kiss~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '💋'
  },
  {
    name: 'pat',
    description: 'Give someone gentle head pats~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👋'
  },
  {
    name: 'cuddle',
    description: 'Cuddle with someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🥰'
  },
  {
    name: 'bite',
    description: 'Playfully bite someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🦷'
  },
  {
    name: 'boop',
    description: 'Boop someone\'s nose~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👆'
  },
  {
    name: 'poke',
    description: 'Poke someone gently~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👉'
  },
  {
    name: 'wave',
    description: 'Wave at someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👋'
  },
  {
    name: 'highfive',
    description: 'Give someone a high five~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🙏'
  },
  {
    name: 'handholding',
    description: 'Hold hands with someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🤝'
  },
  {
    name: 'snuggle',
    description: 'Snuggle with someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🤗'
  },
  {
    name: 'tickle',
    description: 'Tickle someone playfully~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '😆'
  },
  {
    name: 'stare',
    description: 'Stare at someone intensely~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👀'
  },
  {
    name: 'greet',
    description: 'Greet someone warmly~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '😊'
  },
  {
    name: 'hold',
    description: 'Hold someone close~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🤲'
  },
  {
    name: 'lick',
    description: 'Lick someone playfully~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👅'
  },
  {
    name: 'nom',
    description: 'Nom on someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '😋'
  },
  {
    name: 'pats',
    description: 'Give someone multiple pats~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '🤚'
  },
  {
    name: 'punch',
    description: 'Playfully punch someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '👊'
  },
  {
    name: 'slap',
    description: 'Slap someone playfully~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '✋'
  },
  {
    name: 'bully',
    description: 'Playfully bully someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '😈'
  },
  {
    name: 'kill',
    description: 'Playfully eliminate someone~',
    arguments: ['target'],
    permissions: ['none'],
    category: 'roleplay',
    emoji: '💀'
  }
];

const categories: Category[] = [
  { 
    id: 'all', 
    name: 'All', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor">
        <path d="M4 6l16 0M4 12l10 0M4 18l14 0"/>
      </svg>
    ),
    count: commands.length
  },
  { 
    id: 'economy', 
    name: 'Economy', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"/>
        <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
      </svg>
    ),
    count: commands.filter(cmd => cmd.category === 'economy').length
  },
  { 
    id: 'utility', 
    name: 'Utility', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,68c0,38.44-14.23,69.63-42.29,92.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>
      </svg>
    ),
    count: commands.filter(cmd => cmd.category === 'utility').length
  },
  { 
    id: 'moderation', 
    name: 'Moderation', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    count: commands.filter(cmd => cmd.category === 'moderation').length
  },
  { 
    id: 'roleplay', 
    name: 'Roleplay', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"/>
      </svg>
    ),
    count: commands.filter(cmd => cmd.category === 'roleplay').length
  },
  { 
    id: 'music', 
    name: 'Music', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="m19.684 5.821-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.953 3.953 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V4.428L19 7.7v6.856A3.962 3.962 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879zM6 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm11 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
      </svg>
    ),
    count: 0
  },
  { 
    id: 'fun', 
    name: 'Fun', 
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V7H1V9H3V15H1V17H3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V17H23V15H21V9H23ZM15 3L19 7H15V3Z"/>
      </svg>
    ),
    count: 0
  }
];

export default function CommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');  const [searchTerm, setSearchTerm] = useState('');
  const filterTabsRef = useRef<HTMLDivElement>(null);
  
  const filteredCommands = commands.filter(command => {
    const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
                         command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.arguments.some(arg => arg.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         command.permissions.some(perm => perm.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Update category counts based on current search
  const updatedCategories = categories.map(category => ({
    ...category,
    count: category.id === 'all' 
      ? commands.filter(cmd => 
          searchTerm === '' || 
          cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cmd.arguments.some(arg => arg.toLowerCase().includes(searchTerm.toLowerCase())) ||
          cmd.permissions.some(perm => perm.toLowerCase().includes(searchTerm.toLowerCase()))
        ).length
      : commands.filter(cmd => 
          cmd.category === category.id && (
            searchTerm === '' || 
            cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cmd.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cmd.arguments.some(arg => arg.toLowerCase().includes(searchTerm.toLowerCase())) ||
            cmd.permissions.some(perm => perm.toLowerCase().includes(searchTerm.toLowerCase()))
          )
        ).length
  }));
    const copyCommand = (commandName: string) => {
    navigator.clipboard.writeText(`/${commandName}`);
    // Optional: Add a toast notification here if desired
  };  // Drag scrolling for filter tabs
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasMovedRef = useRef(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!filterTabsRef.current) return;
    
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - filterTabsRef.current.offsetLeft;
    scrollStartRef.current = filterTabsRef.current.scrollLeft;
    filterTabsRef.current.classList.add('dragging');
    
    // Prevent text selection while dragging
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !filterTabsRef.current) return;
    
    e.preventDefault();
    hasMovedRef.current = true;
    const x = e.pageX - filterTabsRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Adjust scroll speed
    filterTabsRef.current.scrollLeft = scrollStartRef.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!filterTabsRef.current) return;
    
    isDraggingRef.current = false;
    filterTabsRef.current.classList.remove('dragging');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!filterTabsRef.current) return;
    
    isDraggingRef.current = false;
    filterTabsRef.current.classList.remove('dragging');
  }, []);

  const handleTabClick = useCallback((categoryId: string, e: React.MouseEvent) => {
    // Prevent tab selection if we were dragging
    if (hasMovedRef.current) {
      e.preventDefault();
      return;
    }
    setSelectedCategory(categoryId);
  }, []);

  // Setup drag scrolling event listeners
  useEffect(() => {
    const container = filterTabsRef.current;
    if (!container) return;

    // Add event listeners for drag scrolling
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Reset category to 'all' when searching to show all matching results
  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    if (value && selectedCategory !== 'all') {
      setSelectedCategory('all');
    }
  }, [selectedCategory]);

  // Keyboard shortcuts for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus search with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector(`.${styles.searchInput}`) as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
      // Clear search with Escape
      if (e.key === 'Escape' && searchTerm) {
        handleSearchChange('');
      }
    };    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchTerm, handleSearchChange]);

  // Fade-in animation for command cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInUp);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const commandCards = document.querySelectorAll(`.${styles.commandCard}`);
    commandCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      commandCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [filteredCommands]);
  return (
    <div className={styles.commandsPage}>
      <AnimatedBackground />
      <Header />

      <div className={styles.container}>
        <main className={styles.mainContent}>
          <div className={styles.pageHeader}>
            <div className={styles.pageTitle}>
              <div className={styles.pageIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--dreamy-primary)' }}>
                  <path d="m7 11 2-2-2-2"></path>
                  <path d="M11 13h4"></path>
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h2>Commands~ ✨</h2>
            </div>            <div className={styles.searchSection}>
              <div className={styles.searchContainer}>
                <div className={styles.searchInputWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--dreamy-primary)' }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search commands... (Ctrl+K)"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className={styles.searchInput}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => handleSearchChange('')}
                      className={styles.clearSearchButton}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m18 6-12 12M6 6l12 12"></path>
                      </svg>
                    </button>                  )}
                </div>
              </div>
            </div>
          </div>          <div className={styles.filterContainer}>
            <div className={styles.filterTabsWrapper}>
              <div className={styles.filterTabsContainer}>
                <div 
                  className={styles.filterTabs}
                  ref={filterTabsRef}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                >
                  {updatedCategories.map(category => (                    <button
                      key={category.id}
                      onClick={(e) => handleTabClick(category.id, e)}
                      className={`${styles.filterTab} ${selectedCategory === category.id ? styles.active : ''}`}
                    >
                      {category.icon}                      <span>{category.name}</span>
                      <div className={styles.filterCount}>{category.count}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Commands Grid */}
          <div className={styles.commandsGrid}>
            {filteredCommands.map((command, index) => (
              <div
                key={index}
                className={styles.commandCard}
                data-category={command.category}
                data-command={command.name}
              >
                <div className={styles.commandHeader}>
                  <div className={styles.commandTitle}>{command.name}</div>
                  <button className={styles.copyButton} onClick={() => copyCommand(command.name)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  </button>
                </div>
                <div className={styles.commandDescription}>{command.description}</div>
                <hr className={styles.commandDivider} />
                <div className={styles.commandDetails}>
                  <div className={styles.detailSection}>
                    <h4>arguments</h4>
                    <div className={styles.tags}>
                      {command.arguments.map((arg: string, idx: number) => (
                        <span key={idx} className={styles.tag}>{arg}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.detailSection}>
                    <h4>permissions</h4>
                    <div className={styles.tags}>
                      {command.permissions.map((perm: string, idx: number) => (
                        <span key={idx} className={styles.tag}>{perm}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>          {filteredCommands.length === 0 && (
            <div className={styles.noResults}>
              <div className={styles.noResultsEmoji}>🔍</div>
              <h3 className={styles.noResultsTitle}>No commands found</h3>
              <p className={styles.noResultsText}>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
