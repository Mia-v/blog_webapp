import { createStore } from 'redux';
//import thunk from 'redux-thunk';
import reducer from './reducers/index.js';


const initialState = {};

const store = createStore(reducer, initialState);

export default store;