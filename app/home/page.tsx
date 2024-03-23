'use client';

import { Header } from '@/home/components/layout/header';
import { Cards } from '@/home/features/card/cards';
import { Categories } from '@/home/features/categories';
import { WriteBtn } from '@/home/features/WriteBtn';

export default async function Page() {
  return (
    <>
      <div>
        <Header />
        <div className="mt-[100px]">
          <Categories />
          <Cards />
        </div>
        <WriteBtn />
      </div>
    </>
  );
}
