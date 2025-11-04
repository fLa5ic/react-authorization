import LogInForm from './components/LogInForm/LogInForm';
import TwoFactorAuthForm from './components/TwoFactorAuthForm/TwoFactorAuthForm';

import './scss/app.scss';

// if(logInForm) {
//   return <LogInForm />;
// }

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        {/* <LogInForm /> */}
        <TwoFactorAuthForm />
      </div>
    </div>
  );
}

export default App;
