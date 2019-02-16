import * as React from 'react';
import HelperText from '../HelperText';
import './index.scss';

class BoardField extends React.Component {
    fieldStyle = (type, validStatus) => {
        const className = [];
        if (type === 'input') {
            className.push('field__input');
        } else if(type === 'textarea') {
            className.push('field__textarea');
        }
        if(validStatus === 'error') {
            className.push('field--error');
        }
        return className.join(' ');
    };

    handlerChange = (e, title) => {
        const { handler } = this.props;
        let value = e.target.value;

        // TODO: upgrade or delete phone regexp
        //const regexp = /\+7\(\d\d\d\) \d\d\d-\d\d-\d\d/;

        if(title === 'phone') {
            const numbers = e.target.value.replace(/\D/g, '');
            let array = [numbers.slice(1, 4), numbers.slice(4, 7), numbers.slice(7, 9), numbers.slice(9, 11)];
            value = '+7 ('
                + (array[0] ? array[0] : '___')
                + ') '
                + (array[1] ? array[1] : '___')
                + ' - '
                + (array[2] ? array[2] : '__')
                + ' - '
                + (array[3] ? array[3] : '__') ;
        }
        handler(title, value);
    };

    chooseContent = (type, text, validStatus) => {
        switch (type) {
            case 'input':
                return (
                    <input
                        value={text}
                        onChange={(e) => this.handlerChange(e, 'title')}
                        className={this.fieldStyle('input', validStatus)}
                        maxLength={140}
                    />
                );
            case 'textarea':
                return (
                    <textarea
                        value={text}
                        onChange={(e) => this.handlerChange(e, 'text')}
                        className={this.fieldStyle('textarea')}
                        maxLength={300}
                        style={{resize: 'none'}}
                    />
                );
            case 'phone':
                return (
                    <input
                        value={text}
                        pattern='[0-9]{10}'
                        onChange={(e) => this.handlerChange(e, 'phone')}
                        className={this.fieldStyle('input', validStatus)}
                    />
                );
        }
    };

    render() {
        const { title, text, type, textHelper, validStatus} = this.props;
        const validStatusString = (validStatus === false)
            ? 'error'
            : (validStatus === true)
                ? 'valid'
                : 'info';
        return (
            <div className='field'>
                <span className='field__title'>{ title }</span>
                <div className='field__content'>
                    { this.chooseContent(type, text, validStatusString) }
                    { textHelper &&
                        <HelperText
                            textArray={textHelper}
                            type={validStatusString}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default BoardField;
