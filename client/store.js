import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//default data
import comments from './data/comments';
import posts from './data/posts';

//Create an object for default data
const defaultState = {
  posts,
  comments
};

//make the store
const store = createStore(rootReducer, defaultState);

//finally we need the history
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer); 
  });
}

export default store;
