import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import StickyReserve from '@/components/feature/StickyReserve';
import PageTransition from '@/components/feature/PageTransition';

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background-50 pb-[72px] lg:pb-0">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <StickyReserve />
    </div>
  );
}