import { useContext } from 'react';

import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
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
              <a href='/login'>Login</a>
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
