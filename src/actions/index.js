// import axios from '../axios';

export async function addStar (starNum) {
    return {
        type: 'ADD_STARS_TO_ONE_ITEM',
        starNum
    };
}

export async function sortStarDesc () {
    return {
        type: 'SORT_ITEMS_ACCORDING_TO_DESCENTING_STARS_NUMBER'
    };
}

export async function sortStarAsc () {
    return {
        type: 'SORT_ITEMS_ACCORDING_TO_ASCENTING_STARS_NUMBER'
    };
}
