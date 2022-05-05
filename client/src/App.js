import React, { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateWorkout from './components/CreateWorkout';
import EditWorkout from './components/EditWorkout';
import SingleWorkout from './components/SingleWorkout';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <Routes>
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