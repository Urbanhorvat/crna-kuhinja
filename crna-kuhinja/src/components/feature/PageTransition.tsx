import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wraps each routed page and replays a soft "rise + fade" animation
 * whenever the path changes, so navigation feels smooth instead of
 * a sudden blank-then-pop.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-in">
      {children}
    </div>
  );
}