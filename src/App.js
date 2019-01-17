import React from 'react';
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
import LibraryAbout from './pages/LibraryAbout';
import Notice from './pages/Notice';
import OpeningHours from './pages/OpeningHours';
import ReadingArea from './pages/ReadingArea';
import Navigation from './pages/Navigation';
import News from './pages/News';
import Info from './pages/Info';
import Maps from './pages/Maps';
import ContactUs from './pages/ContactUs';
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
            <Route exact path="/about/about" component = {LibraryAbout}/>
            <Route exact path="/about/notice" component = {Notice}/>
            <Route exact path="/about/opening" component = {OpeningHours}/>
            <Route exact path="/about/area" component = {ReadingArea}/>
            <Route exact path='/about/nav' component={Navigation}/>
            <Route exact path='/about/news' component={News}/>
            <Route exact path='/about/news/:id' component={Info}/>
            <Route exact path='/about/map' component={Maps}/>
            <Route exact path='/about/us' component={ContactUs}/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
