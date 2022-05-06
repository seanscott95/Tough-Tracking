import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Mainlayout from './layouts/Mainlayout';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import CreateWorkout from './components/pages/CreateWorkout';
import SingleWorkout from './components/pages/SingleWorkout';
import GlobalStyles from './components/styles/Global';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <Mainlayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createWorkout' element={<CreateWorkout />} />
            <Route path='/viewWorkouts' element={<SingleWorkout />} />
          </Routes>
        </Mainlayout>
      </Router>
    </ApolloProvider>

  );
}

export default App;