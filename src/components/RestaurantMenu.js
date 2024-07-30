import { Shadow } from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
export const RestaurantMenu = () => {
    const { resId } = useParams();
    const Data = useRestaurantMenu(resId);
    console.log("data is",Data)
    const [showItems, setShowItems] = useState(null);
    const [curRes, setCurRes] = useState({});
    const [i,seti] = useState(0)
    if (Data == null) {
        return (
            <div>
                <Shadow />
            </div>
        );
    }

    const bar = Data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const resname = Data?.cards[2]?.card?.card?.info?.name
    


    const handleAccordion = (categoryId, items) => {
         // Updating showItems state
         if (showItems === categoryId) {
            setShowItems(null); // Collapse if the same category is clicked again
        } else {
            setShowItems(categoryId); // Expand the new category
        }

        setCurRes((prevState) => {
            const newCurRes = { ...prevState };
            newCurRes[categoryId] = items;
            return newCurRes;
        });
    };

    return (
        <div data-testid='RCfield'>
            <h1 className="m-2 pl-2 font-bold text-3xl mb-4">{resname}</h1>
            {bar.map((e, index) => {
                if (e?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                    const categoryId = e?.card?.card?.title;
                    const items = e?.card?.card?.itemCards;
                    console.log("bar",bar)
                    return (
                        <div key={index}>
                            
                            <div
                                className="flex cursor-pointer justify-between text-center my-3 mx-auto w-8/12 border-b-8"
                                onClick={() => handleAccordion(categoryId, items)}
                            >
                                <h3 data-testid={i} className="flex font-bold text-lg">{categoryId} ({items?.length})</h3>
                                <p>{showItems===categoryId ? "🔼" : "🔽"}</p>
                            </div>
                            {showItems===categoryId && (
                                <div key={index} className="text-center">
                                    {curRes[categoryId]?.map((i, idx) => (
                                        <ItemList particularItem={i} index={idx} />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};
