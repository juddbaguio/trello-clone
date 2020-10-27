import React from 'react';
import AddNewItem from './components/AddNewItem';
import Column from './components/Column';
import { AppContainer } from './styles'

const App: React.FC = () => {
  return (
    <AppContainer>
      <Column text="To Do" />
      <Column text="In Progress" />
      <Column text="Done" />
      <AddNewItem toggleButtonText="+ Add another list" />
    </AppContainer>
  );
}

export default App;
