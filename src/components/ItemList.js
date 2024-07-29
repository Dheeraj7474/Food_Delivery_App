import { useDispatch } from "react-redux"
import { LOGO_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList = (props)=>{

    const i = props.particularItem
    const idx = props.index
    const dispatch = useDispatch()
    const handleAdd=(i)=>{
        dispatch(addItem(i))        
    }
    return(
        <div key={idx} className="flex text-left justify-between mx-auto w-8/12 border-b-2 p-2">
            <div className="p-2 text-left w-8/12">
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
                            <button className="bg-green-600 text-white absolute rounded-lg w-16 h-8 my-24 mx-6" onClick={()=>{handleAdd(i)}}>
                                Add
                            </button>
                            <img className="w-28 h-28" src={LOGO_URL + i?.card?.info?.imageId} alt="" />
                        </div>
                    ) : (
                        <button onClick={()=>{handleAdd(i)}} className="bg-green-600 text-white rounded-lg w-16 h-8 my-6 mx-6">
                            Add
                        </button>
                    )}
                </p>
            </div>
        </div>
    )
}

export default ItemList