import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import { useRouter } from 'next/router';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    window.localStorage.clear();
    router.push('/login')
  }
  return (
    <header className={classes.header}>
      <a href='/'>
        <div className={classes.logo}>upSpring</div>
      </a>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <a href='/'><h5>Register</h5></a>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <a href='/login'><h5>Login</h5></a>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
