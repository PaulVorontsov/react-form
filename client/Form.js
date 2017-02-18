import React, {Component} from 'react';

export const validationFunction = {
    'notEmpty' : {
        validate: (field, value) => {
            return typeof value !== 'boolean' && !!value;
        },
        errorMessage: (field, value) => {
            return `Value in ${field} must not be empty, but received '${value}'`;
        }
    },
    'email' : {
        validate: (field, value) => {
            return /^[A-Za-z0-9.\-_]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/.test(''+value);
        },
        errorMessage: (field, value) => {
            return `Field ${field} must have correct email format like 'aaa@bb.xx', but received ${value}`;
        }
    }
};

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {...props.data};

        this.validationRules = {};
        this.validationErrors = {};
    }

    validate(field, value) {

        const validationRule = this.validationRules[field] || null;

        if (!validationRule) return true;

        if (typeof validationRule === 'string') {
            if (this._isPredefinedValidateRule(validationRule)) {
                return validationFunction[validationRule].validate(field, value);
            }
        } else if (typeof validationRule === 'object') {
            return validationRule.validate(field, value);
        }

        return false;

    }

    _isPredefinedValidateRule(type) {
        return Object.keys(validationFunction).indexOf(type) !== -1;
    }

    _onValidateError(field, value) {

        let validationErrorMessage = null;

        const validationRule = this.validationRules[field];

        if (this._isPredefinedValidateRule(validationRule)) {
            validationErrorMessage = validationFunction[validationRule].errorMessage;
        } else if (validationRule.hasOwnProperty('errorMessage')) {
            validationErrorMessage = validationRule.errorMessage;
        }

        this.onValidationError(field, value, validationErrorMessage);

    }

    onValidationError(field, value, message) {}

    setValue(field, value) {
        this.setState({[field]: value});
        if (!this.validate(field, value)) {
            this._onValidateError(field, value);
        }
    }

    render() { return null; }

}

export default Form;
