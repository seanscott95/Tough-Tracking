import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Mainlayout from './layouts/Mainlayout';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import CreateWorkout from './components/pages/CreateWorkout';
import ViewWorkouts from './components/pages/ViewWorkouts';
import EditWorkout from './components/pages/EditWorkout'
import ViewSingle from './components/pages/ViewSingle'
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
            <Route path='/viewWorkout' element={<ViewWorkouts />} />
            <Route path='/editWorkout' element={<EditWorkout />} />
            <Route path='/viewSingle' element={<ViewSingle />} />
          </Routes>
        </Mainlayout>
      </Router>
    </ApolloProvider>

  );
}

export default App;