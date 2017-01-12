import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { addImage } from './actions';
import ImageIndexContainer from './components/image_index_container';


const App = () => (
	<Provider store={store}>
		<ImageIndexContainer />
	</Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	window.store = store;
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
