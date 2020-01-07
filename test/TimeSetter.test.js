import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import TimeSetter from "../src/TimerSetter";

Enzyme.configure({ adapter: new Adapter() });

describe("testing ControlButtons component", () => {
  let props = {
    onChangeName: true,
    isRunning: true,
    taskTime: 11,
    taskName: "German's Work",
    onIncrease: true,
    onDecrease: true
  };

  const render = shallow(<TimeSetter {...props} />);

  test("Should have a button with Set Name label", () => {
    expect(render.find("#button-addon2").text()).toEqual("Set Name");
  });
  test("Should have 3 buttons rendered", () => {
    expect(render.find("button").length).toEqual(3);
  });
});
