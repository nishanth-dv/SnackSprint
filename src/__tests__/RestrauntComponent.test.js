import { fireEvent, render, screen } from "@testing-library/react";
import RestrauntComponent from "../components/RestrauntComponent";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import MOCK_DATA from "../mocks/restrauntMenuData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../utils/redux/store";
import HeaderComponent from "../components/HeaderComponent";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Should render restraunt menu", () => {
  it("Should render restraunt by category list and expand category before addding an item", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RestrauntComponent />
          </Provider>
        </BrowserRouter>
      )
    );

    const categoryAccordion = screen.getByText("Recommended (11)");
    expect(categoryAccordion).toBeInTheDocument();
    fireEvent.click(categoryAccordion);
    const menuItems = screen.getAllByTestId("food-items");
    expect(menuItems.length).toBe(11);
  });

  it("Should add the item to the cart when clicked on add button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderComponent />
            <RestrauntComponent />
          </Provider>
        </BrowserRouter>
      )
    );

    const categoryAccordion = screen.getByText("Recommended (11)");
    expect(categoryAccordion).toBeInTheDocument();
    fireEvent.click(categoryAccordion);
    const addButtons = screen.getAllByRole("button", { name: "Add" });
    console.log(addButtons.length);
    fireEvent.click(addButtons[0]);

    const cartItemQuantity = screen.getByText("1");
    expect(cartItemQuantity).toBeInTheDocument();
  });
});
