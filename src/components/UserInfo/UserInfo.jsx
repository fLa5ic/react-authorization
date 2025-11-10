import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUser } from '../../api/authApi';

const UserInfo = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser,
  });

  if (isLoading) {
    return <div>Loading user info…</div>;
  }

  if (isError) {
    return <div>Failed to load user info: {error.message}</div>;
  }

  return (
    <div>
      <h2>Welcome, {data.name}</h2>
      <div>Email: {data.email}</div>
    </div>
  );
};

export default UserInfo;
