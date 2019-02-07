import data from './data';

class MyStorage {
  constructor(data) {
    this.dbName = 'boardList';

    //если нет выжеленной ячейки памяти с данными, то иницируем ячейку
    if (this.storage === undefined) {
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
  };

  // сеттер в ячейку памяти записывает данные
  set storage(storage) {
    const { dbName } = this;
    return localStorage[dbName] = JSON.stringify(storage);
  };

  createUser = (id, board) => {
    const { title, text, phone, city, photo } = board;

    if ([title, text, phone, city, photo].some(elem => elem === undefined)) {
      return false;
    }

    return {
      id,
      title,
      text,
      phone,
      city,
      photo
    };
  };

  addBoard = (board, id) => {
    const store = this.storage;
    const newBoard = this.createUser(id, board);

    if (newBoard !== false) {
      store.push(newBoard);
      this.storage = store;
    }

    return newBoard;
  };

  deleteBoard = (deleteBoardIndex) => {
    const store = this.storage;
    let res = store.splice(deleteBoardIndex, 1);
    this.storage = store;

    return !!res.length;
  };
}

const myStorage = new MyStorage(data);

export default myStorage;