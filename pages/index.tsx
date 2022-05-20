import type { NextPage } from 'next';
import Head from 'next/head';

const posts = [
  { title: 'Post 1', excerpt: 'Example text.' },
  { title: 'Post 2', excerpt: 'Strawberries.' },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map(
            (post, index) =>
            <div key={index}>
              {post.title}<br />
              {post.excerpt}
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
