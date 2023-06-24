import { images } from '@app/assets';
import { AuthContext } from '@app/context/authContext';
import { getAuthStatus } from '@app/features/authentication/hooks/getAuthStatus';
import { CssBaseline } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const { data, isLoading, isFetching, isError, isFetched } = useQuery({
    queryKey: ['auth'],
    queryFn: getAuthStatus,
    networkMode: 'offlineFirst',
  });
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {isError && <img style={{ width: '100dvw', height: '100dvh' }} src={images.NotFound} alt="error image" />}
      {isLoading && isFetching && (
        <img style={{ width: '100dvw', height: '100dvh' }} src={images.spinner} alt="loading screen spinner" />
      )}
      <>{isFetched && (data.status === 404 || !data == true) && <Navigate to="auth" />}</>
      <>{data?.role === 'developer' && <Navigate to="developer" />}</>
      <>{data?.role === 'admin' && <Navigate to="admin" />}</>
      <CssBaseline />
      <Outlet />
    </AuthContext.Provider>
  );
}
