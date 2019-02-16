import myStorage from '../service';
import { SAVE, CHANGE, DELETE } from './../AC';

export default function boardList(state = myStorage.storage, action) {
    const { type, payload, generateId, id } = action;

    switch (type) {
        case SAVE:
            myStorage.addBoard(payload, generateId);
            return myStorage.storage;

        case CHANGE:
            const indexInArray = state.findIndex((board) => {
              return board.id === id;
            });
            myStorage.changeBoard(payload, id, indexInArray);
            return myStorage.storage;

        case DELETE:
            const deleteIndex = state.findIndex((board) => {
              return board.id === payload;
            });
            myStorage.deleteBoard(deleteIndex);
            return myStorage.storage;

        default: {
            return state;
        }
    }
}
