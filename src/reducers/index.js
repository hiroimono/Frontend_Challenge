import ratingReducer from './ratingReducer';
import sortingReducer from './sortingReducer';

import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    rating: ratingReducer,
    sorting: sortingReducer 
});

export default AllReducers;
