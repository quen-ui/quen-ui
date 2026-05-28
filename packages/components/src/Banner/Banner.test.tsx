import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Banner from "./Banner";

describe("Banner (Persistent Page-Level)", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("renders with title and description", () => {
    render(
      <Banner
        title="Update"
        description="New version available"
      />
    );
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(screen.getByText("Update")).toBeInTheDocument();
    expect(screen.getByText("New version available")).toBeInTheDocument();
  });

  test('uses role="region" by default, not alert', () => {
    render(<Banner title="Test" />);
    const banner = screen.getByRole("region");
    expect(banner).toBeInTheDocument();
    expect(banner.getAttribute("role")).toBe("region");
  });

  test("binds aria-labelledby to title", () => {
    render(<Banner title="Title Text" description="Desc" />);
    const banner = screen.getByRole("region");
    const title = screen.getByText("Title Text");
    expect(banner).toHaveAttribute("aria-labelledby", title.id);
  });

  test("closes and saves to localStorage", () => {
    render(<Banner title="Dismiss me" storageKey="test-banner" dismissible />);
    const closeBtn = screen.getByLabelText("Close notification");

    fireEvent.click(closeBtn);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
    expect(window.localStorage.getItem("banner:test-banner")).toBe("true");
  });

  test("respects pre-dismissed state from localStorage", () => {
    window.localStorage.setItem("banner:skip-me", "true");
    render(<Banner title="Hidden" storageKey="skip-me" />);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  test("renders action in correct slot", () => {
    render(
      <Banner title="Action Banner" action={<button>Learn More</button>} />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
