import { Card } from './card';

const cardItems = [
  {
    id: '1',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '2',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '3',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '4',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '5',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '6',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '7',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  },
  {
    id: '8',
    chips: [
      { text: '인기글', isActive: true },
      { text: '합리적 소비', isActive: false },
      { text: '자린고비', isActive: false }
    ],
    title: '이건 제목 1이요',
    desc: '이건 내용 1이요',
    price: 40000,
    images: '',
    like: 4
  }
];

export const Cards = () => {
  return (
    <ul>
      {cardItems.map(item => (
        <Card key={item.id} cardItem={item} />
      ))}
    </ul>
  );
};
