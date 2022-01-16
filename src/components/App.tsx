import React from 'react';
import { User } from '../model/Model';

interface AppState{
  user: User
}

export class App extends React.Component<{}, {}>{
  render(): React.ReactNode {
      return <h1>App Works</h1>
  }
}

export default App;
