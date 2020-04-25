import * as ActionTypes from './ActionTypes';

export  const addComment = (dishId , ratting,  author, comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        ratting: ratting,
        comment:comment
    }
});
