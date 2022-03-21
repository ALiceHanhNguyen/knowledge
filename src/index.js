import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { fetchCategoryData, fetchHomeData } from './actions'

import './public/scss/index.css';
import App from './templates/App';
import * as serviceWorker from './serviceWorker';

const saveState = (state) => {
  if(state.categoryData.length !== 0){
    localStorage.setItem("state", JSON.stringify(state));
  }
};

const getState = () => {
  try{
    const s = localStorage.getItem("state");
    if (s  === null) return undefined;
    return JSON.parse(s);
  }catch(e){
    return undefined;
  }
};

const initialState = getState();
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.dispatch(fetchCategoryData());
store.dispatch(fetchHomeData());
store.subscribe(()=>{
  saveState({
    categoryData: store.getState().categoryData
  })
})

ReactDOM.render(
  	<Provider store={store}>
  		<App />
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
