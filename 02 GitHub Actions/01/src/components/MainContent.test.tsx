import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainContent from "./MainContent";

describe("MainContent", (): void => {
  it("should render a button", (): void => {
    render(<MainContent />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show the help area after clicking the button", async (): Promise<void> => {
    render(<MainContent />);

    const button: HTMLButtonElement = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("help-area")).toBeInTheDocument();
  });
});
