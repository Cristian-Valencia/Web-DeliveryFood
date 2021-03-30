import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Pages from './components/Pages/Pages.component'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>

      <Header />

      <Router>

        <Pages />

      </Router>
    </div>
  );
}

export default App;
