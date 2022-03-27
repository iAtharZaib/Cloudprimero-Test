import * as actionTypes from '../actions/actionTypes';

const initialState = {
 

};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
   
      case actionTypes.SET_FEEDBACKID:
      return {
        ...state,
        feedbackID: action.data,
      };
    default:
      return state;
  }
};

export default mainReducer;
