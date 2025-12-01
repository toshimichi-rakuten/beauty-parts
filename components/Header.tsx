import React from 'react';

interface HeaderProps {
  title?: string;
  showKV?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title = '楽天ビューティ',
  showKV = false
}) => {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <h1>{title}</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="#">ヘアサロン</a></li>
              <li><a href="#">ネイル</a></li>
              <li><a href="#">まつげ</a></li>
              <li><a href="#">エステ</a></li>
              <li><a href="#">リラク</a></li>
            </ul>
          </nav>
        </div>
        {showKV && (
          <div className="key-visual">
            <div className="kv-content">
              <h2>美しさを、もっと身近に</h2>
              <p>あなたにぴったりのサロンを見つけよう</p>
            </div>
          </div>
        )}
      </header>
      <style jsx>{`
        .site-header {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header-container {
          max-width: 1216px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo h1 {
          color: #bf0000;
          font-size: 24px;
          margin: 0;
        }
        .main-nav ul {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .main-nav a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .main-nav a:hover {
          color: #bf0000;
        }
        .key-visual {
          background: linear-gradient(135deg, #bf0000 0%, #ff6b6b 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
        }
        .kv-content h2 {
          font-size: 36px;
          margin: 0 0 16px 0;
        }
        .kv-content p {
          font-size: 18px;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
