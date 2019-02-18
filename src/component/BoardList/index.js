import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem, chooseItem } from '../../AC';
import './index.scss';
import BoardItem from '../BoardItem';
import PropTypes from 'prop-types';

class BoardList extends React.Component {
    render() {
        return (
            <div className='board-list'>
                <h2 className='board-list__title'>Объявление</h2>
                <ul>
                    {
                        this.props.boardList
                            .sort((boardA, boardB) =>
                                boardB.id - boardA.id
                            )
                            .map(board =>
                            <BoardItem
                                key={board.id}
                                board={board}
                                chooseItem={this.props.chooseItem}
                                deleteItem={this.props.deleteItem}
                            />
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    boardList: state.boardList,
});
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        deleteItem,
        chooseItem
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);

BoardList.propTypes = {
    board: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        phone: PropTypes.string.isRequired,
        city: PropTypes.string,
    })),
    deleteItem: PropTypes.func,
    chooseItem: PropTypes.func,
};