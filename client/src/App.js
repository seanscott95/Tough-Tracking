import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar'
import Home from './components/pages/Home';
// import Login from './components/pages/Login';
// import Dashboard from './components/pages/Dashboard';
// import CreateWorkout from './components/pages/CreateWorkout';
// import EditWorkout from './components/pages/EditWorkout';
// import SingleWorkout from './components/pages/SingleWorkout';
// import GlobalStyles from './components/styles/Global';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createworkout' element={<CreateWorkout />} />
        <Route path='/editworkout' element={<EditWorkout />} />
        <Route path='/singleworkout' element={<SingleWorkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;