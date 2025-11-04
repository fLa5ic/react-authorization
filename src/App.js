import Header from './components/Header/Header';
import InputEmail from './components/InputEmail/InputEmail';
import InputPassword from './components/InputPassword/InputPassword';
import LogInBtn from './components/LogInBtn/LogInBtn';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="input-container">
          <InputEmail />
          <InputPassword />
          <LogInBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
