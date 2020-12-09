var React = require('react');

var styles = {"primary":"_1ZDek","secondary":"_1SyN1","outline":"_2DPaP","dark":"_15c5K","light":"_1KM8T"};

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "primary" : _ref$type;
  return React.createElement("button", {
    style: style,
    onClick: onClick,
    className: styles[type]
  }, text);
};
Button.defaultProps = {
  onClick: function onClick() {
    return console.log("implement click");
  }
};

var styles$1 = {"textInput":"_1D7yh"};

var Input = function Input(_ref) {
  var cssClass = _ref.cssClass,
      placeholder = _ref.placeholder;
  var classString = cssClass || styles$1.textInput;
  return React.createElement("input", {
    className: classString,
    type: "text",
    placeholder: placeholder
  });
};

exports.Button = Button;
exports.Input = Input;
//# sourceMappingURL=index.js.map
