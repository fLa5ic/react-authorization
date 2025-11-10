import React from 'react';
import { useFormContext } from 'react-hook-form';
import Header from '../Header/Header';
import InputEmail from '../InputEmail/InputEmail';
import InputPassword from '../InputPassword/InputPassword';
import LogInBtn from '../LogInBtn/LogInBtn';

import styles from './LogInForm.module.scss';

const LogInForm = ({ onSubmit, isLoading, error }) => {
  const { handleSubmit } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.logInForm}>
      <Header title="Sign in to your account to continue" />
      <div className={styles.inputWrapper}>
        <InputEmail />
        <InputPassword />
        {error && <div className={styles.submitError}>{error.message || 'Login failed'}</div>}
        <LogInBtn isLoading={isLoading} />
      </div>
    </form>
  );
};

export default LogInForm;
