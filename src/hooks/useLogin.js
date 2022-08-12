import { useState } from 'react';
import { fbAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setIsPending(true);
    fbAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch({
          type: 'LOGIN',
          payload: res.user,
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => setIsPending(false));
  };

  return { login, error, isPending };
};
