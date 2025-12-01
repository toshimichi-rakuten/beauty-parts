import Head from 'next/head';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import Button from '../components/Button';
import Table from '../components/Table';
import Footer from '../components/Footer';

export default function Home() {
  // サンプルデータ
  const sampleData = [
    { name: '美容室ABC', area: '東京・渋谷', rating: '4.8', price: '¥5,000〜' },
    { name: 'ネイルサロンXYZ', area: '東京・新宿', rating: '4.7', price: '¥3,000〜' },
    { name: 'リラクサロン癒し', area: '東京・池袋', rating: '4.9', price: '¥4,000〜' },
  ];

  const columns = [
    { key: 'name', header: 'サロン名', width: '30%' },
    { key: 'area', header: 'エリア', width: '25%' },
    { key: 'rating', header: '評価', width: '15%' },
    { key: 'price', header: '料金', width: '30%' },
  ];

  return (
    <>
      <Head>
        <title>楽天ビューティ - コンポーネント一覧</title>
        <meta name="description" content="楽天ビューティのコンポーネントライブラリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header title="楽天ビューティ" showKV={true} />

      <main style={{ maxWidth: '1216px', margin: '40px auto', padding: '0 20px' }}>
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '24px' }}>検索フォーム</h2>
          <SearchForm />
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '24px' }}>ボタン</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" size="small">
              小さいボタン
            </Button>
            <Button variant="primary" size="medium">
              標準ボタン
            </Button>
            <Button variant="primary" size="large">
              大きいボタン
            </Button>
            <Button variant="secondary" size="medium">
              セカンダリ
            </Button>
            <Button variant="outline" size="medium">
              アウトライン
            </Button>
            <Button variant="primary" size="medium" disabled>
              無効化
            </Button>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '24px' }}>テーブル</h2>
          <Table columns={columns} data={sampleData} />
        </section>
      </main>

      <Footer />
    </>
  );
}
