'use client';

import React, { useState } from 'react';

export function UserPostsList() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <section>
      <ul className="flex items-center justify-between pt-10">
        <li
          className={`flex w-1/2 cursor-pointer items-center justify-center border-b-4 p-[18px] ${activeTab === 'posts' && 'border-error'}`}
          onClick={() => setActiveTab('posts')}>
          작성글
        </li>
        <li
          className={`flex w-1/2 cursor-pointer items-center justify-center border-b-4 p-[18px] ${activeTab === 'comments' && 'border-error'}`}
          onClick={() => setActiveTab('comments')}>
          작성글
        </li>
      </ul>
    </section>
  );
}
