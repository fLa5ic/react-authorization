import React from 'react';
import styles from './LogInBtn.module.scss';

const LogInBtn = () => {
  return (
    <button className={styles.logInBtn} type="submit">Log in</button>
  );
};

export default LogInBtn;