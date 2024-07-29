import { render, screen } from "@testing-library/react";
import { OriginalCard } from "../RestaurantCard";
import { mockData } from "../Mock/ResCardMock";
import UserContext from "../../utils/UserContext";
import "@testing-library/jest-dom";

it("should contain the 1st rescard", () => {
  render(
      <OriginalCard
        ci={mockData.info.cloudinaryImageId}
        res_name={mockData.info.name}
        cuisines={mockData.info.cuisines.join(", ")}
        star={mockData.info.avgRating}
        cost={mockData.info.costForTwo}
      />
  );
  
  const name = screen.getByText("Varalakshmi Tiffins");
  expect(name).toBeInTheDocument();
});
