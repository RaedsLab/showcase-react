import { combineReducers } from 'redux';
import planets from './planets';
import descriptions from './descriptions';
export default combineReducers({
  planets,
  descriptions
});
