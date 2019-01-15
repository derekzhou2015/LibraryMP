import React from 'react';
import Footer from './components/Footer';
import Service from './pages/Service';
import About from './pages/About';
import CardBind from './pages/CardBind';
import OPAC from './pages/OPAC';
import Book from './pages/Book';
import Renew from './pages/Renew';
import Borrow from './pages/Borrow';
import UnifyLend from './pages/UnifyLend';
import Resources from './pages/Resources';
import Res from './pages/Res';

import {BrowserRouter,Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
          <Route exact path="/" component = {Service}/>
          <Route exact path="/service" component = {Service}/>
          <Route exact path="/service/cardbind" component = {CardBind}/>
          <Route exact path="/service/renew" component = {Renew}/>
          <Route exact path="/service/opac" component = {OPAC}/>
          <Route exact path="/service/opac/:id" component = {Book}/>
          <Route exact path="/service/borrow" component = {Borrow}/>
          <Route exact path="/service/borrow/:id" component = {Book}/>
          <Route exact path="/service/unifylend" component = {UnifyLend}/>
          <Route exact path="/service/resources" component = {Resources}/>
          <Route exact path="/service/resources/:id" component = {Res}/>
          <Route exact path="/about" component = {About}/>
          <Route path="/" component = {Footer}/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
