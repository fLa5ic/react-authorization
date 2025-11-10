import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LogInForm from './components/LogInForm/LogInForm';
import TwoFactorAuthForm from './components/TwoFactorAuthForm/TwoFactorAuthForm';
import { loginUser, fetchCurrentUser } from './api/authApi';

import './scss/app.scss';

function App() {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [isOnLoginStep, setIsOnLoginStep] = React.useState(true);
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
      await queryClient.prefetchQuery({
        queryKey: ['currentUser'],
        queryFn: fetchCurrentUser,
      });

      methods.reset();
      setIsOnLoginStep(false);
    },
    onError: (error) => {
      console.error('Login error:', error.message);
    },
  });

  const handleLogInSubmit = (data) => {
    loginMutation.mutate({ email: data.email, password: data.password });
  };

  const handleBackToLogin = () => {
    setIsOnLoginStep(true);
    methods.reset();
    queryClient.removeQueries({ queryKey: ['twoFactor'] });
  };

  return (
    <div className="wrapper">
      <FormProvider {...methods}>
        <div className="content">
          {isOnLoginStep ? (
            <LogInForm
              onSubmit={handleLogInSubmit}
              isLoading={loginMutation.isPending}
              error={loginMutation.error}
            />
          ) : (
            <TwoFactorAuthForm onBack={handleBackToLogin} />
          )}
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
