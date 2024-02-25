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
      displayName: 'Sign in with Kakao',
      icon: <SiKakaotalk color="black" />
    },
    {
      name: 'google',
      displayName: 'Sign in with Google',
      icon: <FcGoogle width={24} height={24} />
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
          <Button className="w-full bg-neutral text-white">
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  );
};

export default AuthForm;
