
import RestroCard from "./RestroCard";
// import restroData from "../utils/mock_data";
import { topRatedImgUrl } from "../utils/constants";
import searchIcon from "../searchIcon.png"
import { useState,useEffect } from "react";

const BodyComponent = () => {
  const [restarentsData, setRestarentsData] = useState([]);
  //  useState syntax
  //const [restarentsData, setRestarentsData] = useState(restroData);
  // destructured useState syntax
  //  const arr = useState(restroData);
  // const [restarentsData, setRestarentsData] = arr;
  // normal useState syntax
  //  const restarentsData = arr[0];
  //  const setRestarentsData = arr[1];
  const [searchTerm, setSearchTerm] = useState('');

  // Filter restaurants based on search term
  const filteredRestaurants = restarentsData.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // useEffect(() => {
  //   const filteredRestaurants = restroData.filter((restaurant) =>
  //     restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setRestarentsData(filteredRestaurants);
  // }, [searchTerm]); // Re-run effect when searchTerm changes

useEffect(()=>{
  fetchData();
},[])

const fetchData= async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.803819&lng=83.205051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json)  
  setRestarentsData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setRestarentsData(filteredRestaurants);
          }}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
      <div className="filter-container">
        <button
          type="submit"
          className="filter-button"
          onClick={() => {
            const topRated = restarentsData.filter(
              (res) => res.info.avgRating > 4.3
            );
            setRestarentsData(topRated);
          }}
        >
          <img src={topRatedImgUrl} alt="Search" />
        </button>
      </div>
      <div className="card-container-something-like-that">
        {restarentsData.map((restarent) => (
          <RestroCard key={restarent.info.id} resDetails={restarent} />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
