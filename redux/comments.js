import * as ActionTypes from './ActionTypes';

const initialState = {
  errMess: null,
  comments: []
};

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
      const commentId = state.comments.length;
      action.payload.id = commentId;
      return { ...state, errMess: null, comments: state.comments.concat(action.payload)}


    default:
      return state;
  }
};
