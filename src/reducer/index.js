import {combineReducers} from 'redux';
import boardList from './boardList';
import currentBoard from './currentBoard';

export default combineReducers({
    boardList,
    id: currentBoard,
})