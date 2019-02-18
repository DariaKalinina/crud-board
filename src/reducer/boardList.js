import myStorage from '../service';
import { SAVE, CHANGE, DELETE } from './../AC';

export default function boardList(state = myStorage.storage, action) {
    const { type, payload, generateId, id } = action;

    switch (type) {
        case SAVE:
            myStorage.addBoard(payload, generateId);
            return myStorage.storage;

        case CHANGE:
            myStorage.changeBoard(payload, id);
            return myStorage.storage;

        case DELETE:
            myStorage.deleteBoard(payload);
            return myStorage.storage;

        default: {
            return state;
        }
    }
}
