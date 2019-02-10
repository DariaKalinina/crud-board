import * as React from 'react';
import Board from '../Board';
import BoardList from '../BoardList';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <Board />
                    <BoardList />
                </div>
            </div>
        );
    }
}

export default App;
