import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = ()=>{
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News  setProgress={setProgress} key="general" pageSize={3} country="in" category="general" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
            <Route exact path="/business">
              <News  setProgress={setProgress} key="business" pageSize={3} country="in" category="business" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
            <Route exact path="/entertainment">
              <News  setProgress={setProgress} key="entertainment" pageSize={3} country="in" category="entertainment" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
            <Route exact path="/health">
              <News  setProgress={setProgress} key="health" pageSize={3} country="in" category="health" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
            <Route exact path="/science">
              <News  setProgress={setProgress} key="science" pageSize={3} country="in" category="science" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
            <Route exact path="/sports">
              <News  setProgress={setProgress} key="sports" pageSize={3} country="in" category="sports" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
            <Route path="/technology">
              <News  setProgress={setProgress} pageSize={3} country="in" category="technology" apiKey="1fe3e619f1ff4fc1ada46542f1c20251" apikey_2="3fa4339fb39044d0b4afcc23a6ee4d87" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}
export default App
