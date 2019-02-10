import * as React from 'react';
import HelperText from '../HelperText';
import './index.css';

class BoardField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validStatus: null
        };
    }

    fieldStyle = () => {
        const className = [''];
        if(!this.state.validStatus) {
            className.push('');
        }
        return className.join(' ');
    };

    handlerChange = (e, title) => {
        const { handler } = this.props;
        handler(title, e.target.value);
    };

    chooseContent = (type, text) => {
        switch (type) {
            case 'input':
                return (
                    <input
                        value={text}
                        onChange={(e) => this.handlerChange(e, 'title')}
                        className={this.fieldStyle()}
                        maxLength={140}
                    />
                );
            case 'textarea':
                return (
                    <textarea
                        value={text}
                        onChange={(e) => this.handlerChange(e, 'text')}
                        className={this.fieldStyle()}
                        maxLength={300}
                        style={{resize: 'none'}}
                    />
                );
        }
    };

    render() {
        const { title, text, type, textHelper} = this.props;
        return (
            <div className='field'>
                <span className='field__title'>{ title }</span>
                <div className='field__content'>
                    { this.chooseContent(type, text) }
                    { textHelper &&
                        <HelperText
                            textHelper={textHelper}
                            isValid={this.state.validStatus}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default BoardField;
