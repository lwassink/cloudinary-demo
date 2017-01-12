import { ADD_IMAGE } from "./actions";

const _defaultState = {
  images: []
}

const reducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_IMAGE:
      return {
        images: [
          ...oldState.images,
          action.image
        ]
      };
    default:
      return oldState;
  }
}

export default reducer;
