import React from 'react';

import Header from '../Header/Header';
import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LogInBtn from '../LogInBtn/LogInBtn';

import styles from './LogInForm.module.scss';

const LogInForm = () => {
   return (
      <div className={styles.logInForm}>
         <Header title="Sign in to your account to continue" />
         <div className={styles.inputWrapper}>
            <InputEmail />
            <InputPassword />
            <LogInBtn />
         </div>
      </div>
   );
};

export default LogInForm;
