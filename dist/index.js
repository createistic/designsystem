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

exports.Button = Button;
//# sourceMappingURL=index.js.map
