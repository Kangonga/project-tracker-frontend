import { AuthPageContainer } from '@app/features/authentication/components/authPageContainer';
import { Outlet } from 'react-router-dom';

export function AuthPagesContainer() {
  return (
    <>
      <AuthPageContainer>
        <Outlet />
      </AuthPageContainer>
    </>
  );
}
