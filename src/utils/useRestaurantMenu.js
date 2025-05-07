import { useState, useEffect } from "react";
import { restarentInfo } from "../utils/constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
useEffect(()=>{
    fetchData();
}, [])

  const fetchData = async () => {
    const data = await fetch(restarentInfo + resId);
    const json = await data.json();
    console.log(json)
    setResInfo(json?.data?.cards);
    console.log(json?.data?.cards)
  };
return resInfo;
}


export default useRestaurantMenu