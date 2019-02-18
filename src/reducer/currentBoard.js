import { CHOOSE_ID, CHANGE } from './../AC';

export default function currentBoard(state = null, action) {
    const { type, payload } = action;

    switch (type) {
        case CHOOSE_ID:
            const newState = payload;
            return newState;
        case CHANGE:
            return null;
        default: {
            return state;
        }
    }
}