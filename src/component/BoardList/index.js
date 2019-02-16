import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem, chooseItem } from '../../AC';
import './index.scss';
import BoardItem from '../BoardItem';

class BoardList extends React.Component {
    render() {
        return (
            <div className='board-list'>
                <h2>Объявление</h2>
                <ul>
                    {
                        this.props.boardList.map(board =>
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
    id: state.id
});
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        deleteItem,
        chooseItem
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
