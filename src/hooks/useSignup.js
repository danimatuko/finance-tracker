import { useContext, useState } from 'react';
import { fbAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setIsPending(true);
    try {
      const res = await fbAuth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        setError('Could not complete signup');
        throw new Error('Could not complete signup');
      }

      await res.user.updateProfile({ displayName });
      dispatch({
        type: 'LOGIN',
        payload: res.user,
      });
      
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
