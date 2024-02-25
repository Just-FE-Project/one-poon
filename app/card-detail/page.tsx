'use client';

import { AppBar } from '@/shared/components/app-bar/appBar';
import { Dropdown } from '@/shared/components/dropdown/dropdown';
import { LeftArrow } from '@/shared/components/left-arrow/leftArrow';

import { cardDetailLayouts } from './components/layout';
import { CardDetailDetailWidget } from './features/detail/widgets/widget';

const index = () => {
  const { Layout, Body } = cardDetailLayouts;
  return (
    <Layout>
      <AppBar leftChildren={<LeftArrow />} rightChildren={<Dropdown />} />
      <Body>
        <CardDetailDetailWidget />
      </Body>
    </Layout>
  );
};

export default index;
