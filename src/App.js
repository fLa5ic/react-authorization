import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import LogInForm from './components/LogInForm/LogInForm';
import TwoFactorAuthForm from './components/TwoFactorAuthForm/TwoFactorAuthForm';

import './scss/app.scss';

function App() {
   const methods = useForm({
      mode: 'onChange',
      reValidateMode: 'onChange',
   });

   const [isOnLoginStep, setIsOnLoginStep] = React.useState(true);
   const [isLoading, setIsLoading] = React.useState(false);

   const loginUser = async (email, password) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return email && password
         ? { success: true }
         : { success: false, error: 'Invalid credentials' };
   };

   const handleLogInSubmit = async (data) => {
      setIsLoading(true);
      try {
         const result = await loginUser(data.email, data.password);
         if (result.success) {
            setIsOnLoginStep(false);
         } else {
            console.error(result.error);
         }
      } catch (error) {
         console.error('Login error:', error);
      } finally {
         setIsLoading(false);
      }
   };

   const handleBackToLogin = () => {
      setIsOnLoginStep(true);
   };

   return (
      <div className="wrapper">
         <FormProvider {...methods}>
            <div className="content">
               {isOnLoginStep ? (
                  <LogInForm onSubmit={handleLogInSubmit} isLoading={isLoading} />
               ) : (
                  <TwoFactorAuthForm onBack={handleBackToLogin} />
               )}
            </div>
         </FormProvider>
      </div>
   );
}

export default App;
