import * as actionTypes from '../actions/actionTypes';

const initialState = {
 userData:null,
 posts:[]

};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SET_POSTS_DATA:
      return {
        ...state,
        posts: action.data,
      };
      case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        userData: action.data,
      };
      case actionTypes.ADD_SINGLE_POST_DATA:
      return {
        ...state,
        posts: [action.data,...state.posts],
      };
    default:
      return state;
  }
};

export default mainReducer;
