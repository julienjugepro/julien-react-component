"use strict";

require("sass-jest");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _button = _interopRequireDefault(require("../src/components/button"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe("Button", function () {
  describe("Reducer", function () {});
  test("snapshot renders", function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_button.default, null));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the inner Counter", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_button.default, null, "test"));
    expect(wrapper.text()).toEqual("test");
  });
});

//# sourceMappingURL=button.test.js.map