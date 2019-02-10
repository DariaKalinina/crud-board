export const DELETE = 'DELETE';
export const SAVE = 'SAVE';
export const CHANGE = 'CHANGE';

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

