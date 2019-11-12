import Dashboard from './views/OrganizationDashboard/Dashboard/Dashboard';
import Profile from './views/OrganizationDashboard/Profile/Profile';
import ChangePassword from './views/OrganizationDashboard/ChangePassword/ChangePassword';

const adminRoutes = [
  { path: '/organization/', exact: true, name: 'Home' },
  { path: '/organization/dashboard', name: 'Dashboard', component: Dashboard },  
  { path: '/organization/profile', exact: true,  name: 'Profile', component: Profile }, 
  { path: '/organization/change-password', exact: true,  name: 'Change Password', component: ChangePassword },
];

export default adminRoutes;
