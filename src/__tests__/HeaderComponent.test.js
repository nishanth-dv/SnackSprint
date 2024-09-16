import { render, screen } from "@testing-library/react";
import HeaderComponent from "../components/HeaderComponent";
import { Provider } from "react-redux";
import store from "../utils/redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should render header component", () => {
  it("Should render cart with zero item on load", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(0);

    expect(cartItems).toBeInTheDocument();
  });
});
