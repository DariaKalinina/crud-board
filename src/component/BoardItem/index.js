import * as React from 'react';
import './index.scss';

class BoardItem extends React.Component {
    handleChange = (id) => {
        this.props.chooseItem(id);
    };

    handleDelete = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { title, text, phone, id} = this.props.board;
        return (
            <li className='board-item'>
                <div className='board boar--left'>
                    <div className='board__title'>{title}</div>
                    <div className='board__text'>{text}</div>
                    <div className='board__photo'></div>
                </div>
                <div className='board board--right'>
                    <div className='board board--vertical'>
                        <div className='board__phone'>{phone}</div>
                    </div>
                    <div className='board board--vertical'>
                        <button onClick={() => this.handleChange(id)} className='button button--blue'>Редактировать</button>
                        <button onClick={() => this.handleDelete(id)} className='button button--red'>Удалить</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default BoardItem;
