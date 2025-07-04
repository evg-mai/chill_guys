import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='App'>
      <Route exact path='/' component = {Classifier} />
      <Route path='/history' component = {ImageList}/>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
