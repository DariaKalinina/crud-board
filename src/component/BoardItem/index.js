import * as React from 'react';
import './index.scss';

class BoardItem extends React.Component {
    render() {
        const { title, text, phone } = this.props.board;
        return (
            <li className='board-item'>
                <div>
                    <div>{title}</div>
                    <div>{text}</div>
                    <div>{phone}</div>
                </div>
                <div>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </div>
            </li>
        );
    }
}

export default BoardItem;
