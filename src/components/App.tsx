import React from 'react';
import { User } from '../model/Model';

interface AppState{
  user: User | undefined
}

export class App extends React.Component<{}, AppState>{
  render(): React.ReactNode {
      return <h1>App Works</h1>
  }
}

export default App;
