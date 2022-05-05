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
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/createWorkout' element={<CreateWorkout />}></Route>
          <Route path='/editWorkout' element={<EditWorkout />}></Route>
          <Route path='/singleWorkout' element={<SingleWorkout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;