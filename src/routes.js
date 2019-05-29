import { Appointments } from './components/pages/Appointments';
import { Diagnosis } from './components/pages/Diagnosis';
import { History } from './components/pages/History';
import { Home } from './components/pages/Home';
import NotFoundPage from './components/pages/NotFoundPage';
import { Prescriptions } from './components/pages/Prescriptions';
import { Profile } from './components/pages/Profile';
import { Welcome } from './components/pages/Welcome';

export const routePath = {
  Appointments: '/appointments/',
  Diagnosis: '/diagnosis/',
  History: '/history/',
  Home: '/',
  Prescriptions: '/prescriptions/',
  Profile: '/profile/',
  Welcome: '/welcome/',
};

export default [
  {
    path: routePath.Welcome,
    component: Welcome,
  },
  {
    path: routePath.Home,
    component: Home,
  },
  {
    path: routePath.Profile,
    component: Profile,
  },
  {
    path: routePath.Prescriptions,
    component: Prescriptions,
  },
  {
    path: routePath.History,
    component: History,
  },
  {
    path: routePath.Diagnosis,
    component: Diagnosis,
  },
  {
    path: routePath.Appointments,
    component: Appointments,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
