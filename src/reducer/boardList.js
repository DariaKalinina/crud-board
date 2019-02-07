import myStorage from '../service';
import { SAVE, DELETE } from './../AC';

export default function boardList(state = myStorage.storage, action) {
  const { type, payload, generateId } = action;

  switch (type) {
    case SAVE:
      myStorage.addBoard(payload, generateId);

      return myStorage.storage;


    case DELETE:
      const deleteIndex = state.findIndex((board) => {
        return board.id === payload;
      });
      myStorage.deleteBoard(deleteIndex);

      return myStorage.storage;
  }

  return state
}
