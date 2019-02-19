import * as React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class BoardItem extends React.Component {
    handleChange = (id) => {
        this.props.chooseItem(id);
    };

    handleDelete = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { title, text, phone, city, id } = this.props.board;

        return (
            <li className='board-item'>

                <div className='board boar--left'>
                    <div className='board__title'>{ title }</div>
                    { text && <div className='board__text'>{ text }</div> }
                    <div className='board__photo' />
                </div>

                <div className='board board--right'>
                    <div className='board board--vertical'>
                        <div className='board__phone'>{ phone }</div>
                        {city && <div className='board__city'>{ city }</div>}
                    </div>
                    <div className='board board--vertical'>
                        <button
                            onClick={() => this.handleChange(id)}
                            className='button button--blue'
                        >
                            Редактировать
                        </button>
                        <button
                            onClick={() => this.handleDelete(id)}
                            className='button button--red'
                        >
                            Удалить
                        </button>
                    </div>
                </div>

            </li>
        );
    }
}

export default BoardItem;

BoardItem.propTypes = {
    board: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        phone: PropTypes.string.isRequired,
        city: PropTypes.string,
    }),
    deleteItem: PropTypes.func,
    chooseItem: PropTypes.func,
};