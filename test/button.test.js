import "sass-jest";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Button from "../src/components/button";
import React from "react";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("Button", () => {
  describe("Reducer", () => {});
  test("snapshot renders", () => {
    const component = renderer.create(<Button />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders the inner Counter", () => {
    const wrapper = mount(<Button>test</Button>);
    expect(wrapper.text()).toEqual("test");
  });
});
