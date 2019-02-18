import * as React from 'react';
import HelperText from '../HelperText';
import './index.scss';
import PropTypes from 'prop-types';

const city = ['Москва', 'Хабаровск', 'Чебоксары'];

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

    handlerChange = (e, field) => {
        const { handler } = this.props;
        let value = e.target.value;
        if(field === 'phone') {
            const numbers = e.target.value.replace(/\D/g, '');
            const regex = /^([^\s]{1})([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
            const match = regex.exec(numbers);
            if (match) {
                match.shift();
                value = '+7 ('+ match[1] +') ' + match[2] + '-' + match[3] + '-' + match[4];
            }
            const numberValue = match ? value : numbers;
            handler(field, numberValue);
            return;
        }
        handler(field, value);
    };

    handlerChangeForCity = (value, field) => {
        const { handler } = this.props;
        const cityList = document.querySelector('.select__option');
        cityList.classList.remove('select__option--open');
        handler(field, value);
    };

    openList = () => {
        const cityList = document.querySelector('.select__option');
        cityList.classList.add('select__option--open');
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
                        maxLength={18}
                        placeholder='+7 (___) ___ - __ - __'
                        onChange={(e) => this.handlerChange(e, 'phone')}
                        className={this.fieldStyle('input', validStatus)}
                    />
                );
            case 'city':
                return (
                    <div className='select'>
                        <div className='select__field'>
                            {text}
                        </div>
                        {text &&
                        <button
                            className='select__remove'
                            onClick={() => this.handlerChangeForCity('', 'city')}
                        />
                        }
                        <button className='select__open' onClick={this.openList} />
                        <ul className='select__option'>
                            {
                                city.map((item) =>
                                    <li
                                        className='select__item'
                                        key={item}
                                        onClick={() => this.handlerChangeForCity(item, 'city')}
                                    >
                                        {item}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                );
            default: break;
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

BoardField.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    validStatus: PropTypes.bool,
    textHelper: PropTypes.arrayOf(PropTypes.string),
    handler: PropTypes.func,
};
