import { render, screen } from "@testing-library/react";
import ContactComponent from "../components/ContactComponent";
import "@testing-library/jest-dom";

describe("Contact component should render", () => {
  it("should render Contact elements", () => {
    render(<ContactComponent />);
    // Query
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should render submit button", () => {
    render(<ContactComponent />);
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should render two input boxes", () => {
    render(<ContactComponent />);
    // const button = screen.getByRole("button");
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
