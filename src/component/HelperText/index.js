import * as React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

class HelperText extends React.Component {
    switchType = (type) => {
        switch(type) {
            case 'error':
                return 'helper helper--error';
            case 'valid':
                return 'helper helper--valid ';
            default:
                return 'helper helper--info';
        }
    };
    switchContent = (type, textArray) => {
        switch(type) {
            case 'error':
                return <p>Заполните поле</p>;
            case 'valid':
                return <p>Заполнено</p>;
            default:
                return textArray.map((text, index) => <p key={index}>{text}</p>);
        }
    };

    render() {
        const { textArray, type } = this.props;
        return (
            <div className={this.switchType(type)}>
                {this.switchContent(type, textArray)}
            </div>
        );
    }
}

export default HelperText;

HelperText.propTypes = {
    textArray: PropTypes.array,
    type: PropTypes.string.isRequired,
};