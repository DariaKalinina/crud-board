export default store => next => action => {
    if (!action.hasOwnProperty('generateId')) {
        return next(action);
    } else {
        return next({
            ...action,
            generateId: Date.now().toString()
        })
    }
}