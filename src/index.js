import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'; //component from react-refux lib
import { createStore } from 'redux';
import App from './component/App';
import reducers from './reducers';

ReactDom.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
