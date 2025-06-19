import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Image 
              src="/star.png" 
              alt="Mars" 
              width={24} 
              height={24} 
              style={{ filter: 'drop-shadow(0 0 6px var(--star-glow))' }} 
            />
            <span style={{ color: 'var(--dreamy-primary)', fontWeight: 600 }}>
              Mars~ ✨
            </span>
          </div>
          <div className="footer-links">
            <Link href="#">
              Privacy Policy
            </Link>
            <Link href="#">
              Terms of Service
            </Link>
            <Link href="#">
              Support Server
            </Link>
            <Link href="#">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
