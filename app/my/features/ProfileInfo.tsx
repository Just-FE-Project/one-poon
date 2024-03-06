'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Avatar } from '@/shared/components/avatar/avatar';

export function ProfileInfo() {
  const [profileImage, setProfileImage] = useState<string | null>(
    'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
  );

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await fetch('/api/profile-image');
        const data = await response.json();
        setProfileImage(data.profileImage || null);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProfileImage();
  }, []);

  return (
    <section className="flex flex-col items-center gap-16 pb-14 pt-[68px]">
      <div className="flex items-center gap-4">
        {profileImage ? (
          <Avatar src={profileImage} size="md" shape="circle" />
        ) : (
          <Avatar letters="이름" color="primary" shape="circle" />
        )}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-lg">
            <span className="font-bold">ZB 쿠키</span>
            <span className="pt-1">
              <Image src={'/pencil-icon.svg'} width={15} height={15} alt={'프로필 수정 아이콘'}></Image>
            </span>
          </div>
          <span className="font-bold text-gray-600">1일 전</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-center px-2 font-bold">
        <div className="flex flex-col items-center">
          <span>누적(글) 조회수</span>
          <span className="text-gray-600">483</span>
        </div>
        <span className="divider divider-horizontal mx-2"></span>
        <div className="flex flex-col items-center">
          <span>누적 조회수</span>
          <span className="text-gray-600">205</span>
        </div>
        <span className="divider divider-horizontal mx-2"></span>
        <div className="flex flex-col items-center">
          <span>누적 좋아요</span>
          <span className="text-gray-600">130</span>
        </div>
      </div>
    </section>
  );
}
