import React, { useContext, useEffect, useState } from 'react';
import { Res_card, Shadow } from './RestaurantCard';
import { LOGO_URL, ListOfRestaurants } from '../utils/constants';
import { Link } from 'react-router-dom';
import {useOnlineStatus} from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [Res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [Search, setSearch] = useState("");
  const isOnline = useOnlineStatus();


  const {userName,setUserName} = useContext(UserContext)
 
  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3457176&lng=78.55222959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    let a = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    setRes(a);
    setFilteredRes(a);
  };

  const handleFilter = () => {
    let fData = Res.filter((e) => e.info.avgRating > 4);
    return setFilteredRes(fData);
  };

  if (!isOnline) {
    return (
      <div>
        <h1>No internet.</h1>
      </div>
    );
  }

  if (Res.length === 0) {
    return (
      <div className="tr">
        <div className="body">
          <Shadow />
          <Shadow />
          <Shadow />
          <Shadow />
          <Shadow />
        </div>
      </div>
    );
  }

  return (
    <div className="m-3 w-100%">
      <div className='flex flex-wrap justify-between mb-10 bg-slate-50 h-12'>
        <div className='flex'>
          <input data-testid="input" className='border-2 border-black h-8 mr-2 pr-2'
            type='text'
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button data-testid="Search" className="h-8 w-20 bg bg-pink-300 rounded-lg" onClick={() => {
            const filteredRes = Res.filter((e) =>
              e.info.name.toLowerCase().includes(Search.toLowerCase())
            );
            setFilteredRes(filteredRes);
          }}>Search</button>
        </div>
       <div>
        <label>Username:</label>
          <input type='text' className="bg-gray-200 h-8 border-black " value={userName} onChange={(e)=>{
            setUserName(e.target.value)}}   /> 
       </div>
        <button data-testid="topRatedRestaurants" className="h-8 w-64 bg bg-pink-300 rounded-lg" id="tr" onClick={handleFilter}>
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap pr-5">
        {filteredRes.map((e) => {
          let s = LOGO_URL + e.info.cloudinaryImageId;
          return (
            <Link to={"/restaurant/" + e.info.id} key={e.info.id}>
              <Res_card
                res_name={e.info.name} // Restaurant name
                cuisines={e.info.cuisines.join(', ')} // Cuisines list
                star={e.info.avgRating} // Average rating
                cost={e.info.costForTwo} // Cost for two
                ci={s} // Image URL
                veg = {e.info.veg}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
