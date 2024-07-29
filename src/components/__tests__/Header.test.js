const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { default: appStore } = require("../../utils/appStore");
const { default: UserContext } = require("../../utils/UserContext");
const { BrowserRouter, json } = require("react-router-dom");
import "@testing-library/jest-dom"
import { MOCK_DATA } from "../Mock/TotalMockData";
const Header = require("../Header").default;

global.fetch = jest.fn(()=>{
    return Promise.resolve(()=>{
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should contain login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>          
                <Header />
            </Provider>
        </BrowserRouter>
        );
    
    const loginButton = screen.getByRole("button",{name:"login"})

    expect(loginButton).toBeInTheDocument()
})   


it("should check if cart exists",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
              <Header />     
        </Provider>
    </BrowserRouter>
      );
    
    const cart = screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument()
    })

it("should change login to logout onclick", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
        </Provider>
      );
    const loginButton = screen.getByRole("button", { name: "login" });
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name:"logout"})
    expect(logoutButton).toBeInTheDocument();
  });