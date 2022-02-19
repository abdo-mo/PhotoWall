export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const addPhoto = (photoData) => {
    return {
      type:"ADD",
      payload: photoData
    }
  };

  export const addComment = (commentData) => {
    console.log('test')
    return {
      type:"ADDCOMMENT",
      payload: commentData
    };
  };

export const deletePhoto = (key) => {
    return {
        type: 'REMOVE',
        payload: key
    };
};
export const deleteAll = () => {
  return {
      type: 'REMOVEALL'
  };
};