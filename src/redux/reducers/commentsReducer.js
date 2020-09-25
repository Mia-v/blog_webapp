
const comments = (state = [], action) => {
  switch (action.type) {
    case 'COMMENTS_LOADED': {
      return action;
    };

    default: {
      return state;
    }
  };
};

export default comments;