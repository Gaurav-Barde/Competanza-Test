import {createStore, combineReducers} from 'redux';
import Reducers from './reducers';

const RootReducers = combineReducers({
  Reducers,
});

export const store = createStore(RootReducers);
