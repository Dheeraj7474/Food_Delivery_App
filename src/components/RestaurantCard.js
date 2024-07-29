import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext, useState } from "react";

// OriginalCard component
export const OriginalCard = (props) => {
  const {userName} = useContext(UserContext)


  return (
    <div data-testid="resCard" className="w-60 m-2 p-2 border-2 hover:bg-slate-400">
      <img className="w-56 h-56" id="img2" src={props.ci} alt={props.res_name} />
      <p className="font-bold">{props.res_name}</p>
      <p>{props.cuisines}</p>
      <h3>{props.star}⭐</h3>
      <h3>{props.cost}</h3>
      <h3>{userName}</h3>
    </div>
  );
};

// Higher-Order Component (HOC)
const withVegLabel = (Component) => {
  return (props) => {
    return (
      <div >
        {props.veg && 
        <label className="bg-black text-white absolute .h-7 rounded-lg w-24 text-center h-8">Vegetarian</label>}
        
        <Component {...props} />
      </div>
    );
  };
};

// Enhanced component using the HOC
export const Res_card = withVegLabel(OriginalCard);

export const Shadow = () => (
  <div>
    <div className="shadow"></div>
  </div>
);
