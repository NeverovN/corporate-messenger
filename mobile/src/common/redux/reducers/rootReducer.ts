import { combineReducers } from '@reduxjs/toolkit';

// reducers
import currentTheme from './currentTheme';
import savedMessage from './savedMessage';

const reducer = combineReducers({ currentTheme, savedMessage });

export default reducer;
