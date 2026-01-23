import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Image from "./Image";
import type { IImageProps } from "./types";

const testId = "image";

const renderComponent = (props: IImageProps) => {
  return render(<Image data-testid={testId} {...props} />);
};

describe("Image", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ src: "test.png", alt: "Test Image" })).not.toThrow();
  });

  it("renders image with src and alt", () => {
    renderComponent({ src: "test.png", alt: "Test Image" });
    const img = screen.getByAltText("Test Image") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("test.png");
  });

  it("calls onError and displays fallback on image error", () => {
    const onError = jest.fn();
    renderComponent({ src: "wrong.png", fallback: "fallback.png", onError, alt: "Test" });
    const img = screen.getByAltText("Test") as HTMLImageElement;
    fireEvent.error(img);
    expect(onError).toHaveBeenCalled();
    expect(img.src).toContain("fallback.png");
  });

  it("renders placeholder if no src or error", () => {
    renderComponent({ src: undefined, placeholder: <div data-testid="placeholder">Placeholder</div> });
    expect(screen.getByTestId("placeholder")).toBeInTheDocument();
  });

  it("applies height, width, alt props", () => {
    renderComponent({ src: "test.png", alt: "Test", height: 100, width: 200 });
    const container = screen.getByTestId(testId);
    expect(container).toHaveStyle("height: 100px");
    expect(container).toHaveStyle("width: 200px");
  });

});
