import { Appointments } from './components/pages/Appointments';
import { Diagnosis } from './components/pages/Diagnosis';
import { History } from './components/pages/History';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import NotFoundPage from './components/pages/NotFoundPage';
import { Prescriptions } from './components/pages/Prescriptions';
import { Profile } from './components/pages/Profile';
import { Welcome } from './components/pages/Welcome';
import { Register } from './components/pages/Register';

export const routePath = {
  Appointments: '/appointments/',
  Diagnosis: '/diagnosis/',
  History: '/history/',
  Home: '/',
  Login: '/login',
  Prescriptions: '/prescriptions/',
  Profile: '/profile/',
  Register: '/register/',
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
    path: routePath.Login,
    component: Login,
  },
  {
    path: routePath.Register,
    component: Register,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
