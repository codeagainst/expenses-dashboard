import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Expenses from './pages/expenses/Expenses'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return(
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </>
  );
}

export default App;
