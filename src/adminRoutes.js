import React from 'react';
const Dashboard = React.lazy(() => import('./views/AdminDashboard/Dashboard'));
const Organization = React.lazy(() => import('./views/AdminDashboard/Organization/Organization'));
const Users = React.lazy(() => import('./views/AdminDashboard/Users/Users'));
const User = React.lazy(() => import('./views/AdminDashboard/Users/User'));
const Category = React.lazy(() => import('./views/AdminDashboard/Category/Category'));
const ChangePassword = React.lazy(() => import('./views/AdminDashboard/ChangePassword/ChangePassword'));

const adminRoutes = [
  { path: '/admin/', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },  
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },  
  { path: '/admin/users/:profileId', exact: true, name: 'User Details', component: User },
  { path: '/admin/category', exact: true,  name: 'Category', component: Category },
  { path: '/admin/organization', exact: true,  name: 'Organization', component: Organization },
  { path: '/admin/change-password', exact: true,  name: 'Change Password', component: ChangePassword },
];

export default adminRoutes;
