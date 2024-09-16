import { render, screen } from "@testing-library/react";
import RestrauntCard from "../components/RestrauntCard";
import MOCK_DATA from "../mocks/restrauntCardData.json";
import { promotedRestraunt } from "../HOC/RestrauntCardPromoted";
import "@testing-library/jest-dom";

describe("Shpould render restraunt list as cards", () => {
  it("Should render burger king restraunt card", () => {
    render(
      <RestrauntCard
        name={MOCK_DATA.name}
        imageInfo={MOCK_DATA.cloudinaryImageId}
        cuisines={MOCK_DATA.cuisines.slice(0, 3)}
        costForTwo={MOCK_DATA.costForTwo}
      />
    );
    const resName = screen.getByText("Burger King");
    expect([resName].length).toBe(1);
  });

  it("Should render promoted restraunt card", () => {
    const PromotedCard = promotedRestraunt(RestrauntCard);

    render(
      <PromotedCard
        name={MOCK_DATA.name}
        imageInfo={MOCK_DATA.cloudinaryImageId}
        cuisines={MOCK_DATA.cuisines.slice(0, 3)}
        costForTwo={MOCK_DATA.costForTwo}
      />
    );
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
  });
});
