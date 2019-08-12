import * as ActionTypes from './ActionTypes';

const initialState = {
  isLoading: true,
  errMess: null,
  dishes:[]
};

export const dishes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {...state, isLoading: false, errMess: null, dishes: action.payload};

    case ActionTypes.DISHES_LOADING:
      return {...state, isLoading: true, errMess: null, dishes: []}

    case ActionTypes.DISHES_FAILED:
      return {...state, isLoading: false, errMess: action.payload};

      default:
        return state;
    }
};
