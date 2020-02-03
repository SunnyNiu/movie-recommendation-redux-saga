import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MovieExplorer from './MovieExplorer';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #f6f9fe;
  }
  
  body {
    margin: 0;
  }
`;

const Content = styled.div`
  font-family: Verdana;
  padding-top: 80px;
`;

const App = () => (
  <>
    <Header />
    <Content>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie-explorer" component={MovieExplorer} />
      </Switch>
    </Content>
  </>
);

export default App;
