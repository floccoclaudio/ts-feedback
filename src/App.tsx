import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const MainApp = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <MainApp>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </MainApp>
  );
};

export default App;
