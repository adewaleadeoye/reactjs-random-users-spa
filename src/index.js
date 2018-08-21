import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import UserList from './routes/UserList';
import UserDetail from './routes/UserDetail';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/"  component={UserList}/>
      <Route path={'/user-detail/:id'}  component={UserDetail} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
