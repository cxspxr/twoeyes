import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { ArrowBack, ArrowForward, Cached, Settings } from "@material-ui/icons";
import { render } from "@testing-library/react";
import Navigation, { NavigationProps } from "../Navigation";
import useNavigation from "../../../hooks/useNavigation/useNavigation";

jest.mock("../../../hooks/useNavigation/useNavigation");

describe("Navigation component", () => {
  const defaultProps: NavigationProps = {
    bgColor: "rgb(255, 255, 255)",
    color: "rgb(0, 0, 0)",
  };

  describe("implementation", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper = mount(<Navigation {...defaultProps} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("uses navigation hook", () => {
      expect(useNavigation).toBeCalledTimes(1);
    });

    it("renders material bottom navigation component", () => {
      expect(wrapper.find(BottomNavigation).length).toEqual(1);
    });

    it("renders 4 material bottom navigation actions", () => {
      expect(wrapper.find(BottomNavigationAction).length).toEqual(4);
    });

    it("renders arrow back material icon", () => {
      expect(wrapper.find(ArrowBack).length).toEqual(1);
    });

    it("renders arrow forward material icon", () => {
      expect(wrapper.find(ArrowForward).length).toEqual(1);
    });

    it("renders cached material icon", () => {
      expect(wrapper.find(Cached).length).toEqual(1);
    });

    it("renders settings material icon", () => {
      expect(wrapper.find(Settings).length).toEqual(1);
    });
  });

  describe("userBehavior", () => {
    let getByText: Function;

    beforeEach(() => {
      // eslint-disable-next-line react/jsx-props-no-spreading
      const wrapper = render(<Navigation {...defaultProps} />);

      getByText = wrapper.getByText;
    });

    it("shows back button", () => {
      expect(getByText(/Back/)).toBeInTheDocument();
    });

    it("shows forward button", () => {
      expect(getByText(/Forward/)).toBeInTheDocument();
    });

    it("shows reset navigation levels button", () => {
      expect(getByText(/Reset/)).toBeInTheDocument();
    });

    it("shows go to settings button", () => {
      expect(getByText(/Settings/)).toBeInTheDocument();
    });
  });
});
