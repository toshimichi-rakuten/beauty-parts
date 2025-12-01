import React, { useState } from 'react';

interface Prefecture {
  id: string;
  name: string;
}

const prefectures: Prefecture[] = [
  { id: '1', name: '北海道' },
  { id: '2', name: '青森' },
  { id: '3', name: '岩手' },
  { id: '4', name: '宮城' },
  { id: '5', name: '秋田' },
  { id: '6', name: '山形' },
  { id: '7', name: '福島' },
  { id: '8', name: '茨城' },
  { id: '9', name: '栃木' },
  { id: '10', name: '群馬' },
  { id: '11', name: '埼玉' },
  { id: '12', name: '千葉' },
  { id: '13', name: '東京' },
  { id: '14', name: '神奈川' },
  { id: '15', name: '新潟' },
  { id: '16', name: '富山' },
  { id: '17', name: '石川' },
  { id: '18', name: '福井' },
  { id: '19', name: '山梨' },
  { id: '20', name: '長野' },
  { id: '21', name: '岐阜' },
  { id: '22', name: '静岡' },
  { id: '23', name: '愛知' },
  { id: '24', name: '三重' },
  { id: '25', name: '滋賀' },
  { id: '26', name: '京都' },
  { id: '27', name: '大阪' },
  { id: '28', name: '兵庫' },
  { id: '29', name: '奈良' },
  { id: '30', name: '和歌山' },
  { id: '31', name: '鳥取' },
  { id: '32', name: '島根' },
  { id: '33', name: '岡山' },
  { id: '34', name: '広島' },
  { id: '35', name: '山口' },
  { id: '36', name: '徳島' },
  { id: '37', name: '香川' },
  { id: '38', name: '愛媛' },
  { id: '39', name: '高知' },
  { id: '40', name: '福岡' },
  { id: '41', name: '佐賀' },
  { id: '42', name: '長崎' },
  { id: '43', name: '熊本' },
  { id: '44', name: '大分' },
  { id: '45', name: '宮崎' },
  { id: '46', name: '鹿児島' },
  { id: '47', name: '沖縄' },
];

const genres = [
  { value: '', label: 'ヘアサロン' },
  { value: 'nail/', label: 'まつげ・ネイルサロン' },
  { value: 'esthe/', label: 'エステサロン' },
  { value: 'relax/', label: 'リラクサロン' },
];

const SearchForm: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState('13');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSearch = () => {
    console.log('検索:', {
      genre: selectedGenre,
      prefecture: selectedPrefecture,
      area: selectedArea,
    });
    alert(`検索条件:\nジャンル: ${genres.find(g => g.value === selectedGenre)?.label}\n都道府県: ${prefectures.find(p => p.id === selectedPrefecture)?.name}`);
  };

  return (
    <div className="shoplist__search">
      <p className="shoplist__search--info">ヘア・ネイル・まつげ・エステ・リラクサロン対象!</p>
      <div id="shopSearch">
        <div className="feature-search__form">
          <form className="feature-search__menu" onSubmit={(e) => e.preventDefault()}>
            <div className="feature-search__item is-genre">
              <select
                className="genreForm rb-select__default"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {genres.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {genre.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="feature-search__item">
              <select
                className="prefecturesForm feature-search__select"
                value={selectedPrefecture}
                onChange={(e) => setSelectedPrefecture(e.target.value)}
              >
                {prefectures.map((pref) => (
                  <option key={pref.id} value={pref.id}>
                    {pref.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div className="formButton feature-search__buttonItem">
            <a className="feature-search__button" onClick={handleSearch}>
              検索
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shoplist__search {
          max-width: 1216px;
          margin: 0 auto;
        }
        .shoplist__search--info {
          text-align: center;
          font-size: 1.4rem;
          margin-bottom: 16px;
          font-weight: bold;
        }
        .feature-search__form {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #f5f5f5;
          border-radius: 8px;
        }
        .feature-search__menu {
          display: flex;
          gap: 12px;
          flex: 1;
        }
        .feature-search__item {
          flex: 1;
        }
        select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }
        .feature-search__button {
          display: inline-block;
          padding: 12px 32px;
          background: #bf0000;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          white-space: nowrap;
        }
        .feature-search__button:hover {
          background: #a00000;
        }
      `}</style>
    </div>
  );
};

export default SearchForm;
