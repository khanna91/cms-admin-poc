import React from 'react';
import { Route, Switch } from 'react-router-dom';
import notFoundComponent from '@components/notFound/notFound.component';
import LoginComponent from '@components/login/login.component';
import DashboardContainer from '../dashboard';
// import logo from './react.svg';
import './style.scss';

class App extends React.Component {
  componentDidMount() {
    // const loadingElement = document.getElementById('ipl-progress-indicator');
    // if (loadingElement) {
    //   loadingElement.classList.add('available');
    //   setTimeout(() => { loadingElement.outerHTML = ''; }, 2000);
    // }
  }

  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/login" component={LoginComponent} />
        <Route component={notFoundComponent} />
      </Switch>
    );
  }
}

export default App;
