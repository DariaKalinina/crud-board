import { CHANGE } from './../AC';

export default function currentBoard(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE:
      const newState = payload;
      return newState;
  }

  return state
}