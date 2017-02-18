webpackJsonp([0],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _CForm = __webpack_require__(94);

var _CForm2 = _interopRequireDefault(_CForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formData = {
    id: 1,
    text: 'fafasdf',
    url: 'asdfvv',
    email: 'azazaz@ail.ru',
    short: 'assdvv232',
    password: 'sdffvc',
    number: 23,
    date: new Date()
};

(0, _reactDom.render)(_react2.default.createElement(
    'div',
    { className: 'col-md-4' },
    _react2.default.createElement(_CForm2.default, { data: formData })
), document.getElementById('root'));

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _Form2 = __webpack_require__(96);

var _Form3 = _interopRequireDefault(_Form2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CForm = function (_Form) {
    _inherits(CForm, _Form);

    function CForm(props) {
        _classCallCheck(this, CForm);

        var _this = _possibleConstructorReturn(this, (CForm.__proto__ || Object.getPrototypeOf(CForm)).call(this, props));

        _this.validationRules = {
            email: 'email'
        };
        return _this;
    }

    _createClass(CForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'form',
                { action: '' },
                _react2.default.createElement(
                    'div',
                    { className: 'form-group row' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'example-text-input', className: 'col-2 col-form-label' },
                        'Text'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement('input', { className: 'form-control', name: 'text', type: 'text', value: this.state.text, onChange: function onChange(e) {
                                return _this2.setValue(e.target.name, e.target.value);
                            }, id: 'example-text-input' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group row' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'example-email-input', className: 'col-2 col-form-label' },
                        'Email'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement('input', { className: 'form-control', name: 'email', type: 'email', value: this.state.email, onChange: function onChange(e) {
                                return _this2.setValue(e.target.name, e.target.value);
                            },
                            id: 'example-email-input' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group row' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'example-url-input', className: 'col-2 col-form-label' },
                        'URL'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement('input', { className: 'form-control', type: 'url', defaultValue: this.state.url, id: 'example-url-input' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group row' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'example-password-input', className: 'col-2 col-form-label' },
                        'Password'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement('input', { className: 'form-control', type: 'password', defaultValue: this.state.password,
                            id: 'example-password-input' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group row' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'example-number-input', className: 'col-2 col-form-label' },
                        'Number'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement('input', { className: 'form-control', type: 'number', defaultValue: this.state.number,
                            id: 'example-number-input' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group row' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'example-date-input', className: 'col-2 col-form-label' },
                        'Date'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement('input', { className: 'form-control', type: 'date', defaultValue: this.state.date, id: 'example-date-input' })
                    )
                )
            );
        }
    }]);

    return CForm;
}(_Form3.default);

exports.default = CForm;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validationFunction = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validationFunction = exports.validationFunction = {
    'notEmpty': {
        validate: function validate(field, value) {
            return typeof value !== 'boolean' && !!value;
        },
        errorMessage: function errorMessage(field, value) {
            return 'Value in ' + field + ' must not be empty, but received \'' + value + '\'';
        }
    },
    'email': {
        validate: function validate(field, value) {
            return (/^[A-Za-z0-9.\-_]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/.test('' + value)
            );
        },
        errorMessage: function errorMessage(field, value) {
            return 'Field ' + field + ' must have correct email format like \'aaa@bb.xx\', but received ' + value;
        }
    }
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = _extends({}, props.data);

        _this.validationRules = {};
        _this.validationErrors = {};
        return _this;
    }

    _createClass(Form, [{
        key: 'validate',
        value: function validate(field, value) {

            var validationRule = this.validationRules[field] || null;

            if (!validationRule) return true;

            if (typeof validationRule === 'string') {
                if (this._isPredefinedValidateRule(validationRule)) {
                    return validationFunction[validationRule].validate(field, value);
                }
            } else if ((typeof validationRule === 'undefined' ? 'undefined' : _typeof(validationRule)) === 'object') {
                return validationRule.validate(field, value);
            }

            return false;
        }
    }, {
        key: '_isPredefinedValidateRule',
        value: function _isPredefinedValidateRule(type) {
            return Object.keys(validationFunction).indexOf(type) !== -1;
        }
    }, {
        key: '_onValidateError',
        value: function _onValidateError(field, value) {

            var validationErrorMessage = null;

            var validationRule = this.validationRules[field];

            if (this._isPredefinedValidateRule(validationRule)) {
                validationErrorMessage = validationFunction[validationRule].errorMessage;
            } else if (validationRule.hasOwnProperty('errorMessage')) {
                validationErrorMessage = validationRule.errorMessage;
            }

            this.onValidationError(field, value, validationErrorMessage);
        }
    }, {
        key: 'onValidationError',
        value: function onValidationError(field, value, message) {}
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            this.setState(_defineProperty({}, field, value));
            if (!this.validate(field, value)) {
                this._onValidateError(field, value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Form;
}(_react.Component);

exports.default = Form;

/***/ })

},[218]);