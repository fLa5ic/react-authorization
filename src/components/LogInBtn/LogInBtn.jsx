import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './LogInBtn.module.scss';

const LogInBtn = ({ isLoading }) => {
   const { formState } = useFormContext();
   const isFormValid = formState.isValid;
   return (
      <button
         className={`${styles.logInBtn} ${isFormValid ? styles.logInBtnActive : ''}`}
         type="submit"
         disabled={!isFormValid || isLoading}>
         {isLoading ? 'Loading...' : 'Log in'}
      </button>
   );
};

export default LogInBtn;
