import data from './data';

class MyStorage {
    constructor(data) {
        this.dbName = 'boardList';

        //если нет выжеленной ячейки памяти с данными, то иницируем ячейку
        if (this.storage === null) {
            this.init(data);
        }
    };

    // инициируются данные для отправки в сеттер, где будут записаны
    init = (data) => {
       this.storage = data;
    };

    // геттер получает данные из ячейку памяти
    get storage() {
        const { dbName } = this;
        if (localStorage[dbName] !== undefined) {
            return JSON.parse(localStorage[dbName]);
        }
        return null;
    };

    // сеттер в ячейку памяти записывает данные
    set storage(storage) {
        const { dbName } = this;
        return localStorage[dbName] = JSON.stringify(storage);
    };

    createBoard = (id, board) => {
        const { title, text, phone, city} = board;

        if ([title, text, phone, city].some(elem => elem === undefined)) {
            return false;
        }

        return {
            id,
            title,
            text,
            phone,
            city,
        };
    };

    addBoard = (board, id) => {
        const store = this.storage;
        const newBoard = this.createBoard(id, board);

        if (newBoard !== false) {
            store.push(newBoard);
            this.storage = store;
        }

        return newBoard;
    };

    changeBoard = (board, id) => {
        const store = this.storage;
        const newBoard = this.createBoard(id, board);
        const changeIndex = store.findIndex((board) => {
            return board.id === id;
        });
        if (newBoard !== false) {
            store.splice(changeIndex, 1, newBoard);
            this.storage = store;
        }

        return newBoard;
    };

    deleteBoard = (deleteBoardIndex) => {
        const store = this.storage;
        const deleteIndex = store.findIndex((board) => {
            return board.id === deleteBoardIndex;
        });
        let res = store.splice(deleteIndex, 1);
        this.storage = store;

        return !!res.length;
    };
}

const myStorage = new MyStorage(data);

export default myStorage;
