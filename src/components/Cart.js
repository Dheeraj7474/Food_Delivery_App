import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import { LOGO_URL } from "../utils/constants"


const Cart = ()=>{

    const cartItems = useSelector((store)=>{
        return store.cart.items})
    
    const dispatch = useDispatch()
    const handleClear = ()=>{
        dispatch(clearCart())
        
        
    }
    if(cartItems.length===0){
        return(
            <div>
                <h1 className="flex justify-center font-bold text-2xl pt-10">No items</h1>
            </div>
        )
    }
    return(

        <div>
            <button className="bg-black text-white rounded-lg m-2 p-2" onClick={()=>{handleClear()}}>clear Cart</button>
        
        
            <div className="flex space-x- justify-center">
                <div className=" ml-2 p-2 block justify-center">
                    <h1 className="font-bold text-xl border-b-2">Cart Items</h1>
                    <div className="w-12/12">
                    {
                    cartItems.map((i)=>{                        
                        return (
                            <div className="flex text-left justify-between mx-auto border-b-2 p-2">
                                <div className="p-2 text-left w-10/12">
                                    <h4 className="font-bold">{i?.card?.info?.name}</h4>
                                    <h4 className="font-bold">
                                        ₹{i?.card?.info?.price / 100 || i?.card?.info?.defaultPrice / 100}
                                    </h4>
                                    <p className="text-green-600">
                                        {i?.card?.info?.ratings?.aggregatedRating?.rating ? (
                                            <p>
                                                ⭐{i?.card?.info?.ratings?.aggregatedRating?.rating}
                                                <span className="text-gray-600">
                                                    ({i?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                                                </span>
                                            </p>
                                        ) : (
                                            <p></p>
                                        )}
                                    </p>
                                    <p>{i?.card?.info?.description}</p>
                                </div>
                                <div>
                                    <p className="">
                                        {i?.card?.info?.imageId ? (
                                            <div>
                                                <img className="w-28 h-28" src={LOGO_URL + i?.card?.info?.imageId} alt="" />
                                            </div>
                                        ) : (
                                            <p> </p>
                                        )}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default Cart