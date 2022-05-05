import React, { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import CreateWorkout from './components/pages/CreateWorkout';
import EditWorkout from './components/pages/EditWorkout';
import SingleWorkout from './components/pages/SingleWorkout';
import GlobalStyles from './components/styles/Global';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <Routes>
        <GlobalStyles />
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/createWorkout' component={CreateWorkout}></Route>
          <Route path='/editWorkout' component={EditWorkout}></Route>
          <Route path='/singleWorkout' component={SingleWorkout}></Route>
      </Routes>
    </Router>
  );
}

export default App;