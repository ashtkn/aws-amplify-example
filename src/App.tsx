import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello {user?.username}!</p>
            <a className="App-link" href="." onClick={() => signOut?.()}>
              Sign Out
            </a>
          </header>
        )}
      </Authenticator>
    </div>
  );
};

export default App;
