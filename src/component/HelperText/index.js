import * as React from 'react';
import './index.scss';

class HelperText extends React.Component {
    switchType = (type) => {
        switch(type) {
            case 'info':
                return 'helper helper--info';
            case 'error':
                return 'helper helper--error';
            case 'valid':
                return 'helper helper--valid ';
            default:
                return 'helper helper--info';
        }
    };

    render() {
        const { textArray, type } = this.props;
        return (
            <div className={this.switchType(type)}>
                {textArray.map(text => <p>{text}</p>)}
            </div>
        );
    }
}

export default HelperText;
