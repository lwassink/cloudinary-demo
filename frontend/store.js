import { createStore } from 'redux';
import reducer from './reducer.js';

const preloadedState = { images: [
  'http://images.natureworldnews.com/data/images/full/18365/gorilla.jpg',
  'http://elelur.com/data_images/mammals/ape/ape-08.jpg'
]};

const Store = createStore(reducer, preloadedState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
