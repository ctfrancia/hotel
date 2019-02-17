import { combineReducers } from 'redux';
import authorization from './Authorization';
import data from './Data';
import pages from './Pages';

const reducers = combineReducers({
  authorization,
  data,
  pages,
});

export default reducers;