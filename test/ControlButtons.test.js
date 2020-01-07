import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import ControlButtons from "../src/ControlButtons";

Enzyme.configure({ adapter: new Adapter() });

describe("testing ControlButtons component", () => {
  let props = {
    canBePause: false,
    onStop: true,
    onStartorPause: true,
    isOn: false
  };
  const render = shallow(<ControlButtons {...props} />);
  test("Should instantiate", () => {
    expect(render.text().length > 0).toEqual(true);
  });
  test("Should show buttons", () => {
    expect(render.find(".btn").length).toEqual(2);
  });
  test("Should render Start Button", () => {
    expect(render.find("#startbutton").text()).toEqual("Start");
  });
  test("Should render Pause Button", () => {
    let pauseprops = { ...props, isOn: true };
    let pauserender = shallow(<ControlButtons {...pauseprops} />);
    expect(pauserender.find("#startbutton").text()).toEqual("Pause");
  });
  test("Should render Resume Button", () => {
    let resumeProps = { ...props, canBePause: true };
    let resumeRender = shallow(<ControlButtons {...resumeProps} />);
    expect(resumeRender.find("#startbutton").text()).toEqual("Resume");
  });
});
