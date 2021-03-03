import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Exercice1 from './pages/exercice1.js'
import Exercice2 from './pages/exercice2.js'
import Connection from './pages/connection.js'
import Inscription from './pages/inscription1.js'
import Inscription2 from './pages/inscription2.js'
import Calculatrice from './pages/calculatrice.js'
import Acceuil from './pages/acceuil.js'
import ResponsiveDrawer from './pages/drawer.js'
import Portofolio from './pages/portofolio.js'
import Curiculum from './pages/curiculum.js'
import Circulaire from './pages/circulaire.js'
import Heure from './pages/heure.js'
import SimpleTabs from '../src/header/index'


const routing=(

  <Router>
    <div>
      <Route exact path="/" component={Connection} />
       <Route path="/acceuil" component={Acceuil} />
      <Route path="/exercice1" component={Exercice1} />
      <Route path="/exercice2" component={Exercice2} />
      {/* <Route path="/App" component={App} /> */}
       <Route path="/inscription1" component={Inscription} />
       <Route path="/inscription2" component={Inscription2} />
      <Route path="/calculatrice" component={Calculatrice} />
      <Route path="/drawer" component={ResponsiveDrawer} />
      <Route path="/portofolio" component={Portofolio} />
      <Route path="/curiculum" component={Curiculum} />  
      <Route path="/heure" component={Heure} />  
    </div>

  </Router>

)
ReactDOM.render(<App/>, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
