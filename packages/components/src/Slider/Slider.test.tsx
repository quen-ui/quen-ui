import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../tests/renderUtil";
import Slider from "./Slider";
import {expect} from "@storybook/test";

const mockRect = (el: HTMLElement, width = 100, height = 10) => {
  jest.spyOn(el, "getBoundingClientRect").mockReturnValue({
    x: 0,
    y: 0,
    width,
    height,
    top: 0,
    left: 0,
    bottom: height,
    right: width,
    toJSON: () => {}
  });
};

describe("Slider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders single slider correctly", () => {
    render(<Slider value={20} min={0} max={100} />);
    const handles = screen.getAllByRole("slider");
    expect(handles.length).toBe(1);
  });

  test("renders range slider when range=true", () => {
    render(<Slider range value={[10, 40]} />);
    const handles = screen.getAllByRole("slider");
    expect(handles.length).toBe(2);
  });

  test("calls onChange when dragging single handle", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<Slider value={20} onChange={onChange} />);

    const handle = screen.getByRole("slider");

    mockRect(handle.parentElement!.parentElement!);

    await user.pointer({
      target: handle,
      keys: "[MouseLeft]"
    });

    await user.pointer({
      target: handle.parentElement!.parentElement!,
      coords: { x: 80, y: 5 }
    });

    await user.pointer({ keys: "[MouseLeft]" });

    expect(onChange).toHaveBeenCalled();
  });

  test("dragging left handle in range updates start value", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<Slider range value={[20, 60]} onChange={onChange} />);

    const handles = screen.getAllByRole("slider");
    const startHandle = handles[0];

    const track = startHandle.parentElement!.parentElement!;
    mockRect(track);

    await user.pointer({
      target: startHandle,
      keys: "[MouseLeft]"
    });
    await user.pointer({
      target: track,
      coords: { x: 10, y: 5 }
    });
    await user.pointer({ keys: "[MouseLeft]" });

    expect(onChange).toHaveBeenCalledWith([0, 10]);
  });

  test("snaps to step", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<Slider value={0} step={10} onChange={onChange} />);

    const handle = screen.getByRole("slider");

    const track = handle.parentElement!.parentElement!;
    mockRect(track);

    await user.pointer({ target: handle, keys: "[MouseLeft]" });
    await user.pointer({
      target: track,
      coords: { x: 43, y: 0 }
    });
    await user.pointer({ keys: "[MouseLeft]" });

    expect(onChange).toHaveBeenCalledWith(40);
  });

  test("marks appear and clicking them moves handle", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Slider
        value={0}
        onChange={onChange}
        marks={[
          { value: 25, label: "25%" },
          { value: 75, label: "75%" }
        ]}
      />
    );

    const mark25 = screen.getByText("25%").parentElement!;
    expect(mark25).toBeInTheDocument();

    mockRect(mark25.parentElement!.parentElement!.parentElement!);

    await user.click(mark25);

    expect(onChange).toHaveBeenCalledWith(25);
  });

  test("vertical orientation moves correctly", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Slider value={0} max={100} orientation="vertical" onChange={onChange} />
    );

    const handle = screen.getByRole("slider");
    const track = handle.parentElement!.parentElement!;
    mockRect(track, 10, 100); // vertical slider: height matters

    await user.pointer({ target: handle, keys: "[MouseLeft]" });
    await user.pointer({
      target: track,
      coords: { x: 5, y: 10 }
    });
    await user.pointer({ keys: "[MouseLeft]" });

    expect(onChange).toHaveBeenCalled();
  });

  test("draggableTrack moves whole range", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Slider range draggableTrack value={[20, 40]} onChange={onChange} />
    );

    const progress =
      screen.getByTestId("slider-progress") ||
      screen.getAllByRole("presentation")[1];

    const track = progress.parentElement!;
    mockRect(track);

    await user.pointer({ target: progress, keys: "[MouseLeft]" });
    await user.pointer({
      target: track,
      coords: { x: 70, y: 5 }
    });
    await user.pointer({ keys: "[MouseLeft]" });

    expect(onChange).toHaveBeenCalled();
  });

});
