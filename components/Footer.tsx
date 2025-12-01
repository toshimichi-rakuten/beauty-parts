import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>楽天ビューティについて</h3>
            <ul>
              <li><a href="#">楽天ビューティとは</a></li>
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>サロン検索</h3>
            <ul>
              <li><a href="#">ヘアサロン</a></li>
              <li><a href="#">ネイルサロン</a></li>
              <li><a href="#">エステサロン</a></li>
              <li><a href="#">リラクサロン</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ヘルプ</h3>
            <ul>
              <li><a href="#">よくある質問</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Rakuten Beauty. All rights reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        .site-footer {
          background: #333;
          color: white;
          padding: 40px 20px 20px;
          margin-top: 60px;
        }
        .footer-container {
          max-width: 1216px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-section h3 {
          font-size: 16px;
          margin-bottom: 16px;
          color: white;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 8px;
        }
        .footer-section a {
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }
        .footer-section a:hover {
          color: white;
        }
        .footer-bottom {
          border-top: 1px solid #555;
          padding-top: 20px;
          text-align: center;
        }
        .footer-bottom p {
          margin: 0;
          font-size: 14px;
          color: #999;
        }
      `}</style>
    </>
  );
};

export default Footer;
