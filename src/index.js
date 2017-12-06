import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './containers';

import './styles/semantic/dist/semantic.min.css';


import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(

		<BrowserRouter>
				<App/>
		</BrowserRouter>,

	document.getElementById('root')
);
