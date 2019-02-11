import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BoardField from '../BoardField';
import { saveItem, changeItem } from '../../AC';
import './index.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id ? props.board.filter((board) => board.id === props.id).id : null,
            title: props.id ? props.board.filter((board) => board.id === props.id).title : '',
            text: props.id ? props.board.filter((board) => board.id === props.id).text : '',
            phone: props.id ? props.board.filter((board) => board.id === props.id).phone : '+7 (___) ___ - __ - __',
        };
    }

    handlerChange = (title, value) => {
        this.setState({[title]: value});
    };

    handlerSubmit = () => {
        if(this.props.id) {
            this.props.changeItem(this.state.id, this.state);
        } else {
            this.props.saveItem(this.state.id, this.state);
        }
    };

    render() {
        return (
            <div className='board'>
                <h1 className='board__title'>Подать объявление</h1>
                <BoardField
                    title={'Заголовок'}
                    text={this.state.title}
                    handler={this.handlerChange}
                    type={'input'}
                    textHelper={['Обязательное поле', 'Не более 140 символов']}
                />
                <BoardField
                    title={'Текст объявления'}
                    text={this.state.text}
                    handler={this.handlerChange}
                    type={'textarea'}
                    textHelper={['Обязательное поле', 'Не более 300 символов']}
                />
                <BoardField
                    title={'Телефон'}
                    text={this.state.phone}
                    handler={this.handlerChange}
                    type={'phone'}
                    textHelper={['Обязательное поле']}
                />
                <button onClick={this.handlerSubmit}>Подать</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    board: state.boardList.data,
    id: state.id
});
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        saveItem,
        changeItem
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);