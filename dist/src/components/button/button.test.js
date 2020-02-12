"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _ = _interopRequireDefault(require("."));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe("Button", function () {
  describe("Reducer", function () {});
  test("snapshot renders", function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_.default, null));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the inner Counter", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, null, "test"));
    expect(wrapper.text()).toEqual("toto");
  });
});

//# sourceMappingURL=button.test.js.map