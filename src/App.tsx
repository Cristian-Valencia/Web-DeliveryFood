import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Pages from './components/Pages/Pages.component'
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <div>

      

      <Router>

        <Header />

        <Pages />

        <Footer />

      </Router>

      


    </div>
  );
}

export default App;
