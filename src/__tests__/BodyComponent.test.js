import { fireEvent, render, screen } from "@testing-library/react";
import BodyCompnent from "../components/BodyComponent";
import MOCK_DATA from "../mocks/allRestrauntsData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should render body component with all restraunts and provide filters", () => {
  it("Should render an input box with search capabality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyCompnent />
        </BrowserRouter>
      )
    );
    const inputBox = screen.getByTestId("search-input");
    expect(inputBox).toBeInTheDocument();

    const searchButton = screen.getByTestId("search");
    expect(searchButton).toBeInTheDocument();

    const cardsBeforeSearch = screen.getAllByTestId("restraunt-card");
    expect(cardsBeforeSearch.length).toBe(28);

    fireEvent.change(inputBox, { target: { value: "Burger King" } });
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("restraunt-card");
    expect(cardsAfterSearch.length).toBe(2);
  });
});
