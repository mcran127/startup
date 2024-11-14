import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Main } from './main/main';
import { Builder } from './builder/builder';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <body className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='Main'>
                  Main
                </NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='Builder'>
                  Builder
                </NavLink>
              </li>
            )}
            </menu>
          </nav>
        </header>

        <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path="/main" element={<Main onLogout={handleLogout} />} />
          <Route path='/builder' element={<Builder />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Matthew Crandall</span>
            <a className='text-reset' href='https://github.com/mcran127/startup'>
              Source
            </a>
          </div>
        </footer>
      </body>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;