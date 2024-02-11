import { useLayoutEffect } from 'react';

const setScreenHeight = () => {
  if (!window) return;

  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const useSetScreenHeight = () => {
  useLayoutEffect(() => {
    setScreenHeight();

    window.addEventListener('resize', setScreenHeight);

    return () => {
      window.removeEventListener('resize', setScreenHeight);
    };
  }, []);
};
