import { useEffect } from 'react';

export type UseViewport = () => void;

const useViewport: UseViewport = () => {
  useEffect(() => {
    const metaViewport: Element | null = document.querySelector('meta[name=viewport]');

    const width = window.innerWidth;
    const height = window.innerHeight;

    metaViewport?.setAttribute('content', `width=${width}, height=${height}, initial-scale=1.0, user-scalable=no`);
  }, []);
};

export default useViewport;
