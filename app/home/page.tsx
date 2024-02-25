'use client';

import { Header } from './components/layout/header';
import { Layout } from './components/layout/layout';
import { Cards } from './features/card/cards';
import { Categories } from './features/categories';

export default function Page() {
  return (
    <div>
      <Header />
      <Layout>
        <Categories />
        <Cards />
      </Layout>
    </div>
  );
}
