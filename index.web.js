'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stepper = function (_React$Component) {
  _inherits(Stepper, _React$Component);

  function Stepper(props) {
    _classCallCheck(this, Stepper);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      value: _this.props.value,
      minValue: _this.props.minValue,
      maxValue: _this.props.maxValue
    };
    return _this;
  }

  Stepper.prototype.onPress = function onPress(value) {
    var newValue = undefined;
    if (this.state.value + value >= this.state.minValue && this.state.value + value <= this.state.maxValue) {
      newValue = this.state.value + value;
    }
    if (newValue != undefined) {
      this.setState({ value: newValue });
    }
  };

  Stepper.prototype.render = function render() {
    return _react2.default.createElement(
      _reactNative.View,
      { style: _extends({ borderColor: this.props.color }, styles.view) },
      _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { disabled: this.state.value <= this.state.minValue, style: { flex: 1 }, onPress: this.onPress.bind(this, -1) },
        _react2.default.createElement(
          _reactNative.Text,
          { style: _extends({}, styles.text, { color: this.state.value > this.state.minValue ? this.props.color : this.props.disabledColor }) },
          '-'
        )
      ),
      _react2.default.createElement(_reactNative.View, { style: { width: 1, height: 27, backgroundColor: this.props.color } }),
      _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { disabled: this.state.value >= this.state.maxValue, style: { flex: 1 }, onPress: this.onPress.bind(this, 1) },
        _react2.default.createElement(
          _reactNative.Text,
          { style: _extends({}, styles.text, { color: this.state.value < this.state.maxValue ? this.props.color : this.props.disabledColor }) },
          '+'
        )
      )
    );
  };

  return Stepper;
}(_react2.default.Component);

exports.default = Stepper;


Stepper.propTypes = {
  color: _react2.default.PropTypes.string,
  disabledColor: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.number,
  minValue: _react2.default.PropTypes.number,
  maxValue: _react2.default.PropTypes.number.isRequired
};

Stepper.defaultProps = {
  color: "rgb(0,122,255)",
  disabledColor: "rgb(181, 181, 181)",
  value: 0,
  minValue: 0
};

var styles = {
  view: {
    borderRadius: 4,
    borderWidth: 1,
    width: 97,
    height: 27,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
};