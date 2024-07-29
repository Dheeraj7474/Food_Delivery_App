import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter, json } from "react-router-dom"
import { MOCK_DATA } from "../Mock/TotalMockData"
import { act } from "react"
import "@testing-library/jest-dom"

global.fetch =  jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the body component",async ()=>{
    await act(()=>render(
    <BrowserRouter>
    
        <Body/>
    </BrowserRouter>
    ))

    const search = screen.getByRole("button",{name:"Search"})
    expect(search).toBeInTheDocument()
})

it("should render 8 res cards initially and after searching should render respective number",async ()=>{
    await act(()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ))

    const totalCards = screen.getAllByTestId("resCard")
    expect(totalCards.length).toBe(8)

    const input = screen.getByTestId("input")
    const search = screen.getByTestId("Search")

    fireEvent.change(input, {target :{value : "tiffin"}})
    fireEvent.click(search)
    const afterSearch = screen.getAllByTestId("resCard")
    expect(afterSearch.length).toBe(4)

})

it("should render only top rated restaurants",async ()=>{
    await act(()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ))

    const topRestaurants = screen.getByTestId("topRatedRestaurants")

    fireEvent.click(topRestaurants)

    const bodyAfterClickingTopRR = screen.getAllByTestId("resCard")

    expect(bodyAfterClickingTopRR.length).toBe(7)
})