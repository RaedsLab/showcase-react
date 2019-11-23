import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import LeftMenu from "./LeftMenu";
import OrbitSelector from "../OrbitSelector/OrbitSelector";

describe("<LeftMenu />", () => {
  it("should not crash", () => {
    const mount = createMount();
    const props = {
      selectedOrbit: "",
      orbits: [],
      onOrbitChange: jest.fn(x => x)
    };

    const wrapper = mount(<LeftMenu {...props} />);
    expect(wrapper.find(OrbitSelector)).toBeDefined();
  });
});
