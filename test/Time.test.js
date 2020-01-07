import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import Time from "../src/Time";

Enzyme.configure({ adapter: new Adapter() });
describe("testing ControlButtons component", () => {
  let props = {
    taskName: "German's Work",
    secTime: 600
  };
  const render = shallow(<Time {...props} />);

  test("Should show correct Name", () => {
    expect(render.find("#taskName").text()).toEqual("German's Work");
  });
  test("Should show correct Time", () => {
    expect(render.find("#clockL").text()).toEqual("10 : 00");
  });
});
