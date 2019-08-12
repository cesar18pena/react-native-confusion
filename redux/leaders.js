import * as ActionTypes from './ActionTypes';

const initialState = {
  isLoading: true,
  errMess: null,
  leaders: []
};

export const leaders = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {...state, isLoading: false, errMess: null, leaders: action.payload};

    case ActionTypes.LEADERS_LOADING:
      return {...state, isLoading: true, errMess: null, leaders: []}

    case ActionTypes.LEADERS_FAILED:
      return {...state, isLoading: false, errMess: action.payload};

    default:
      return state;
  }
};
