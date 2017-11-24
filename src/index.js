import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
   <HashRouter>
      <Root />
   </HashRouter>
   , document.getElementById('root'));
registerServiceWorker();
