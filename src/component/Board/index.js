import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BoardField from '../BoardField';
import { saveItem, changeItem } from '../../AC';
import { fieldType } from '../common/constant.js';
import './index.scss';

class Board extends React.Component {

    state = {
        data: {
            id: null,
            title: '',
            text: '',
            phone: '',
            city: '',
        },
        isValid: {
            validTitle: null,
            validNumber: null,
        }
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.id && prevState.data.id !== nextProps.id) {
            const currentBoard = nextProps.id && nextProps.board.find((board) => board.id === nextProps.id);
            return {
                data: {
                    id: currentBoard ? currentBoard.id : null,
                    title: currentBoard ? currentBoard.title : '',
                    text: currentBoard ? currentBoard.text : '',
                    phone: currentBoard ? currentBoard.phone : '',
                    city: currentBoard ? currentBoard.city : '',
                }
            };
        } else return null;
    }

    handlerChange = (field, value) => {
        this.setState({
            data: {
                ...this.state.data,
                [field]: value,
            }
        });
    };

    validateField = () => {
        const validTitle = this.state.data.title.length > 0;
        const validNumber =  this.state.data.phone.replace(/\D/g, '').length === 11;

        this.setState({
            isValid: {
                validTitle: validTitle,
                validNumber: validNumber,
            }
        });

        return {validTitle, validNumber};
    };

    handlerSubmit = () => {
        const isValid = this.validateField();

        if (isValid.validNumber && isValid.validTitle) {

            if (this.state.data.id) {
                this.props.changeItem(this.state.data.id, this.state.data);
            } else {
                this.props.saveItem(this.state.data.id, this.state.data);
            }

            this.setState({
                data: {
                    id: null,
                    title: '',
                    text: '',
                    phone: '',
                    city: '',
                },
                isValid: {
                    validTitle: null,
                    validNumber: null,
                }
            })
        } else {
            return null;
        }
    };

    render() {
        return (
            <div className='current-board'>
                <h1 className='current-board__title'>Подать объявление</h1>
                <BoardField
                    title={'Заголовок'}
                    text={this.state.data.title}
                    handler={this.handlerChange}
                    validStatus={this.state.isValid.validTitle}
                    type={fieldType.input}
                    textHelper={['Обязательное поле', 'Не более 140 символов']}
                />
                <BoardField
                    title={'Текст объявления'}
                    text={this.state.data.text}
                    handler={this.handlerChange}
                    type={fieldType.textarea}
                    textHelper={['Необязательное поле', 'Не более 300 символов']}
                />
                <BoardField
                    title={'Телефон'}
                    text={this.state.data.phone}
                    handler={this.handlerChange}
                    validStatus={this.state.isValid.validNumber}
                    type={fieldType.phoneInput}
                    textHelper={['Обязательное поле']}
                />
                <BoardField
                    title={'Город'}
                    text={this.state.data.city}
                    handler={this.handlerChange}
                    type={fieldType.select}
                    textHelper={['Необязательное поле']}
                />
                <button className={'submit-button'} onClick={this.handlerSubmit}>Подать</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    board: state.boardList,
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

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        phone: PropTypes.string.isRequired,
        city: PropTypes.string,
    })),
    id: PropTypes.string,
    saveItem: PropTypes.func,
    changeItem: PropTypes.func,
};