import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //parent of all our components
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(
						<App />, document.getElementById('root'));
registerServiceWorker();
