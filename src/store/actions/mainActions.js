import * as actionType from './actionTypes';

export const setUserDetails = (data) => {
    return {
      type: actionType.SET_USER_DETAILS,
      data:data
    };
  };

  export const setSinglePost = (data) => {
    return {
      type: actionType.ADD_SINGLE_POST_DATA,
      data:data
    };
  };

  export const setPostsData = (data) => {
    return {
      type: actionType.SET_POSTS_DATA,
      data:data
    };
  };
