import { Appointments } from './components/pages/Appointments';
import { Interview, RiskFactors, SuggestedSymptoms, Symptoms, Results } from './components/pages/Diagnosis';
import { History } from './components/pages/History';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { Prescriptions } from './components/pages/Prescriptions';
import { Profile } from './components/pages/Profile';
import { Register } from './components/pages/Register';
import { Welcome } from './components/pages/Welcome';

export const routePath = {
  Appointments: '/appointments/',
  DiagnosisResults: '/diagnosis/results',
  Interview: '/diagnosis/interview/',
  History: '/history/',
  Home: '/',
  Login: '/login',
  Prescriptions: '/prescriptions/',
  Profile: '/profile/',
  Register: '/register/',
  RiskFactors: '/diagnosis/risk-factors/',
  SuggestedSymptoms: '/diagnosis/suggest-symptoms/',
  Symptoms: '/diagnosis/symptoms/',
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
    path: routePath.Symptoms,
    component: Symptoms,
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
    path: routePath.RiskFactors,
    component: RiskFactors,
  },
  {
    path: routePath.SuggestedSymptoms,
    component: SuggestedSymptoms,
  },
  {
    path: routePath.Interview,
    component: Interview,
  },
  {
    path: routePath.DiagnosisResults,
    component: Results,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
