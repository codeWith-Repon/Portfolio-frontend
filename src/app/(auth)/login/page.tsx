import React from 'react';
import LoginPageClient from './LoginPageClient';

export const metadata = {
  title: 'Login | Repon – Access Your Account',
  description:
    'Login to Repon’s portfolio platform to access your dashboard, manage projects, and explore personalized features. Secure and fast authentication for developers and collaborators.',
};

const LoginPage = () => {
  return (
    <div>
      <LoginPageClient />
    </div>
  );
};

export default LoginPage;
