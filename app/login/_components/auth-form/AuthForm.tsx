'use client';

import { type Provider } from '@supabase/supabase-js';
import { FcGoogle } from 'react-icons/fc';
import { SiKakaotalk } from 'react-icons/si';

import { signInWithOAuth } from '@/auth/utils/client';
import { Button } from '@/shared/components/button/button';
type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element;
};

const AuthForm = () => {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'kakao',
      displayName: '카카오로 로그인',
      icon: (
        <div className="radius-m bg-black">
          <SiKakaotalk color={'#ffe812'} size={24} />
        </div>
      )
    },
    {
      name: 'google',
      displayName: '구글로 로그인',
      icon: <FcGoogle size={24} />
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await signInWithOAuth(e);
  };

  return (
    <div className="mt-8">
      {oAuthProviders.map(provider => (
        <form key={provider.name} className="pb-6" onSubmit={handleSubmit}>
          <input type="hidden" name="provider" value={provider.name} />
          <Button className="w-full border-none bg-neutral text-white" size="lg">
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  );
};

export default AuthForm;
