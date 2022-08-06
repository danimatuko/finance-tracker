import { useState } from 'react';
import { fbAuth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setIsPending(true);
    try {
      const res = await fbAuth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      if (!res) {
        setError('Could not complete signup');
        throw new Error('Could not complete signup');
      }

      await res.user.updateProfile({ displayName });

      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
