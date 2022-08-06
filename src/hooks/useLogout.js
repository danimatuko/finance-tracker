import { useState } from 'react';
import { fbAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = () => {
    setIsPending(true);
    fbAuth
      .signOut()
      .then(() => {
        dispatch({
          type: 'LOGOUT',
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => setIsPending(false));
  };

  return { logout, error, isPending };
};
