import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';
import LogInForm from './components/LogInForm/LogInForm';
import TwoFactorAuthForm from './components/TwoFactorAuthForm/TwoFactorAuthForm';

import './scss/app.scss';

function App() {
   const methods = useForm({
      mode: 'onChange', // Валидация при изменении значений
      reValidateMode: 'onChange', // Повторная валидация при изменении
   });

   // Состояние: показываем форму входа (true) или форму двухфакторной аутентификации (false)
   const [isLoggedIn, setIsLoggedIn] = React.useState(true);

   // Состояние загрузки (когда делаем запрос)
   const [isLoading, setIsLoading] = React.useState(false);

   // Функция, которая имитирует запрос на сервер
   const loginUser = async (email, password) => {
      // Имитируем задержку запроса (1 секунда)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Простая проверка: если email и password есть, считаем что всё ок
      // В реальном приложении здесь был бы настоящий запрос на сервер
      if (email && password) {
         return { success: true };
      } else {
         return { success: false, error: 'Invalid credentials' };
      }
   };

   // Функция, которая вызывается при отправке формы
   const onSubmit = async (data) => {
      setIsLoading(true); // Начинаем загрузку

      try {
         // Вызываем функцию логина с данными из формы
         const result = await loginUser(data.email, data.password);

         if (result.success) {
            // Если успешно - показываем форму двухфакторной аутентификации
            setIsLoggedIn(false);
         } else {
            // Если ошибка - можно показать сообщение (пока просто в консоль)
            console.error(result.error);
            setIsLoading(false);
         }
      } catch (error) {
         // Если произошла ошибка при запросе
         console.error('Login error:', error);
         setIsLoading(false);
      }
   };

   return (
      <div className="wrapper">
         <FormProvider {...methods}>
            <div className="content">
               {isLoggedIn ? (
                  <LogInForm onSubmit={onSubmit} isLoading={isLoading} />
               ) : (
                  <TwoFactorAuthForm />
               )}
            </div>
         </FormProvider>
      </div>
   );
}

export default App;
