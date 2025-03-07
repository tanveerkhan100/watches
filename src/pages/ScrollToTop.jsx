import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('Navigated to', pathname);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
