export const DELETE = 'DELETE';
export const SAVE = 'SAVE';

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

