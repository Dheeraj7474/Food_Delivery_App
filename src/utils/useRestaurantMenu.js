import { useEffect, useState } from "react"
import { Res_Menu } from "./constants"


export const useRestaurantMenu = (resId) => {
    const [Data, setData] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async ()=>{
        const res = await fetch(Res_Menu+resId);
        const Data = await res.json();
        setData(Data.data)
    }
    return Data
}
