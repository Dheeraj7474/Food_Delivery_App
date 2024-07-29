import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout = ()=>{
    const {UserName} = useContext(UserContext)
    const [userName,setUserName] = useState(UserName)


    return(
    <Provider store={appStore}>
    <UserContext.Provider value={{userName,setUserName}}>
        <div className="app">        
            <Header />        
            <Outlet />
        </div>
    </UserContext.Provider>
    </Provider>
    )
    
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children:[
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/About",
                element : <About />
            },
            {
                path:"/Contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu />
            },
            {
                path : "/Cart",
                element : <Cart />
            }
        ],
        errorElement:<Error />
    }
])

export default AppLayout;
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)