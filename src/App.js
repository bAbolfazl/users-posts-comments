// import logo from './logo.svg';

import { Redirect, Route, Switch } from 'react-router-dom'

// general styles
import 'reset-css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './containers/header/header.container';
import UsersPage from './pages/users/users.page';
import NotFoundPage from './pages/notFound/notFound.page'
import UserSinglePage from './pages/userSingle/userSingle.page';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route exact path="/users" component={UsersPage} />
        <Route path="/users/:id" component={UserSinglePage} />

        <Route component={NotFoundPage} />
      </Switch>

    </div>
  );
}

export default App;
