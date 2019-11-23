const ratingReducer = ( state = {}, action ) => {

    console.log('/////////////////// ratingReducer-START///////////////////');
    console.log('In ratingReducer, state (before): ', state);

    if (action.type === 'ADD_STARS_TO_ONE_ITEM') {
        state = {
            ...state,
            starNum: action.starNum
        };
    }

    console.log('In ratingReducer, state (after): ', state);
    console.log('/////////////////// ratingReducer-END///////////////////');
    return state;
};

export default ratingReducer;
