import React from 'react';
const Dashboard = React.lazy(() => import('./views/OrganizationDashboard/Dashboard'));
const Profile = React.lazy(() => import('./views/OrganizationDashboard/Profile/Profile'));
const ChangePassword = React.lazy(() => import('./views/OrganizationDashboard/ChangePassword/ChangePassword'));

const adminRoutes = [
  { path: '/organization/', exact: true, name: 'Home' },
  { path: '/organization/dashboard', name: 'Dashboard', component: Dashboard },  
  { path: '/organization/profile', exact: true,  name: 'Profile', component: Profile }, 
  { path: '/organization/change-password', exact: true,  name: 'Change Password', component: ChangePassword },
];

export default adminRoutes;
