import React from 'react';
import Service from './pages/Service';
import About from './pages/About';
import CardBind from './pages/CardBind';
import {BrowserRouter,Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
          <Route exact path="/" component = {Service}/>
          <Route exact path="/service" component = {Service}/>
          <Route path="/service/cardbind" component = {CardBind}/>
          <Route path="/about" component = {About}/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
