import React from 'react';

const AboutPage = React.lazy(() => import('./views/Pages/Frontend/AboutPage'));
const LoginPage = React.lazy(() => import('./views/Pages/Frontend/LoginPage'));
const ResetPassword = React.lazy(() => import('./views/Pages/Frontend/ResetPassword'));
const RegisterPage = React.lazy(() => import('./views/Pages/Frontend/RegisterPage'));
const HomePage = React.lazy(() => import('./views/Pages/Frontend/HomePage'));

const frontendRoutes = [
  { path: '/', exact: true, name: 'Home', component: HomePage },
  { path: '/home', name: 'Home', component: HomePage },  
  { path: '/about-us', exact: true,  name: 'About us', component: AboutPage },  
  { path: '/login', exact: true, name: 'Login', component: LoginPage },
  { path: '/register', exact: true,  name: 'Register', component: RegisterPage },
  { path: '/reset-password/:token', exact: true,  name: 'Reset Password', component: ResetPassword },
];

export default frontendRoutes;
