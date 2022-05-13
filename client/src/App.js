import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Home from './components/pages/Home';
import Mainlayout from './layouts/Mainlayout';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import CreateWorkout from './components/pages/CreateWorkout';
import ViewWorkouts from './components/pages/ViewWorkouts';
import ViewSingle from './components/pages/ViewSingle';
import GlobalStyles from './components/styles/Global';
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <Mainlayout>
          <Routes>
            <Route exact path='/' element={<Home props/>} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/dashboard' element={Auth.loggedIn() ? <Dashboard /> : <Navigate replace to='/'/>} />
            <Route exact path='/createWorkout' element={Auth.loggedIn() ? <CreateWorkout /> : <Navigate replace to='/'/>} />
            <Route exact path='/viewSingle/:workoutId' element={Auth.loggedIn() ?   <ViewSingle /> : <Navigate replace to='/'/>} />
            <Route exact path='/viewWorkouts' element={Auth.loggedIn() ? <ViewWorkouts /> : <Navigate replace to='/'/> } />
          </Routes>
        </Mainlayout>
      </Router>
    </ApolloProvider>

  );
}

export default App;