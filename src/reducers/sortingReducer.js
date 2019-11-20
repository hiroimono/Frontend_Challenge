const sortingReducer = ( state = {}, action ) => {

    console.log('/////////////////// sortingReducer - START ///////////////////');
    console.log('In sortingReducer, state (before): ', state);

    if (action.type === 'SORT_ITEMS_ACCORDING_TO_DESCENTING_STARS_NUMBER') {
        state = {
            ...state,
            desc: action.sortDesc
        };
    }

    if (action.type === 'SORT_ITEMS_ACCORDING_TO_ASCENTING_STARS_NUMBER') {
        state = {
            ...state,
            asc: action.sortAsc
        };
    }

    console.log('In sortingReducer, state (After): ', state);
    console.log('/////////////////// sortingReducer -  END ///////////////////');
    return state;
};

export default sortingReducer;
