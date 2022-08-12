import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [loggedInMenu, setLoggedInMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney </li>
        {!user ? (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              {user.displayName}
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
