import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';
import LogInForm from './components/LogInForm/LogInForm';
import TwoFactorAuthForm from './components/TwoFactorAuthForm/TwoFactorAuthForm';

import './scss/app.scss';

// if(logInForm) {
//   return <LogInForm />;
// }

function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="wrapper">
      <FormProvider {...methods}>
        <div className="content">
          {isLoggedIn ? <LogInForm onSubmit={onSubmit} /> : <TwoFactorAuthForm />}
        </div>
      </FormProvider>
    </div>
  );
}

export default App;
