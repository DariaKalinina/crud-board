export const DELETE = 'DELETE';
export const SAVE = 'SAVE';
export const CHANGE = 'CHANGE';
export const CHOOSE_ID = 'CHOOSE_ID';

export function deleteItem(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function saveItem(id = null, data) {
    return {
        type: SAVE,
        payload: data,
        generateId: id
    }
}

export function changeItem(id, data) {
    return {
        type: CHANGE,
        payload: data,
        id: id
    }
}

export function chooseItem(id) {
    return {
        type: CHOOSE_ID,
        payload: id,
    }
}

