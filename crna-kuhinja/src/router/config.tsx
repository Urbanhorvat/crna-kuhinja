import type { RouteObject } from 'react-router-dom';
import SiteLayout from '@/components/feature/SiteLayout';
import Home from '@/pages/home/page';
import Story from '@/pages/story/page';
import Menu from '@/pages/menu/page';
import Wines from '@/pages/wines/page';
import Gallery from '@/pages/gallery/page';
import Visit from '@/pages/visit/page';
import Gift from '@/pages/gift/page';
import Reserve from '@/pages/reserve/page';
import Privacy from '@/pages/privacy/page';
import Terms from '@/pages/terms/page';
import NotFound from '@/pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'zgodba', element: <Story /> },
      { path: 'jedilnik', element: <Menu /> },
      { path: 'vina', element: <Wines /> },
      { path: 'galerija', element: <Gallery /> },
      { path: 'obisk', element: <Visit /> },
      { path: 'darilni-boni', element: <Gift /> },
      { path: 'rezervacije', element: <Reserve /> },
      { path: 'zasebnost', element: <Privacy /> },
      { path: 'pogoji', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;