import React from 'react';
import Column from './components/Column';
import { AppContainer } from './styles'

const App: React.FC = () => {
  return (
    <AppContainer>
      <Column text="To Do" />
      <Column text="In Progress" />
      <Column text="Done" />
    </AppContainer>
  );
}

export default App;
