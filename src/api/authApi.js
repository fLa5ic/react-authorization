export const loginUser = async ({ email, password }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (email && password) {
    return { success: true };
  }

  throw new Error('Invalid credentials');
};

export const verifyTwoFactorCode = async ({ code }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (code === '123456') {
    return { success: true };
  }

  throw new Error('Invalid code');
};

export const fetchCurrentUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
};
