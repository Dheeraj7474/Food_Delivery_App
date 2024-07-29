import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "../Header";
import Body from "../Body";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { OriginalCard } from "../RestaurantCard";
import { mockData } from "../Mock/ResCardMock";
import { RestaurantMenu } from "../RestaurantMenu";
import { MOCK_DATA } from "../Mock/TotalMockData";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import { useResMenOb } from "../Mock/useResMen";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(useResMenOb),
  })
);

it("should render show cart", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const resCard = screen.getByTestId("RCfield");

  fireEvent.click(resCard);
  const Recommended = screen.getAllByTestId("0");
  expect(Recommended).toBeInTheDocument
  console.log("Recommended[0]", Recommended[0])
  fireEvent.click(Recommended[0])
  const poori = screen.getByText("Poori")
  fireEvent.click()
});
