// import RestroCard from "./RestroCard";
// // import restroData from "../utils/mock_data";
// import { topRatedImgUrl, mangaloreDataUrl} from "../utils/constants";
// import searchIcon from "../searchIcon.png";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const BodyComponent = () => {
//   const [restarentsData, setRestarentsData] = useState([]);
//   //  useState syntax
//   //const [restarentsData, setRestarentsData] = useState(restroData);
//   // destructured useState syntax
//   //  const arr = useState(restroData);
//   // const [restarentsData, setRestarentsData] = arr;
//   // normal useState syntax
//   //  const restarentsData = arr[0];
//   //  const setRestarentsData = arr[1];
//   const [filteredResData, setFilteredResData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter restaurants based on search term
//   const filteredRestaurants = restarentsData.filter((restaurant) =>
//     restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // useEffect(() => {
//   //   const filteredRestaurants = restroData.filter((restaurant) =>
//   //     restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   //   setRestarentsData(filteredRestaurants);
//   // }, [searchTerm]); // Re-run effect when searchTerm changes

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(mangaloreDataUrl);
//     const json = await data.json();
//     console.log(json);
//     setRestarentsData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   };
//   // if (restarentsData.length === 0) {
//   //   return <Shimmer />;
//   // }
//   const searchFun = (e) => {
//     if (
//       e.target.value !== undefined &&
//       e.target.value !== "" &&
//       e.target.value !== null
//     ) {
//       console.log("inside if : ", e.target.value);
//       setSearchTerm(e.target.value);
//       setFilteredResData(filteredRestaurants);
//     } else {
//       console.log("inside else : ", e.target.value);
//       setSearchTerm("");
//       setFilteredResData(restarentsData);
//     }
//   }
//   return restarentsData.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search restaurants"
//           value={searchTerm}
//           // onChange={(e) => {
//           //   e.target.value !== "" ? ( setSearchTerm(e.target.value),
//           //   setFilteredResData(filteredRestaurants)) : (setFilteredResData(restarentsData));
//           //   // setSearchTerm(e.target.value);
//           //   // setFilteredResData(filteredRestaurants);
//           // }}
//           onChange={(e) => {
//             searchFun(e)
//           }}
//           className="search-input"
//         />
//         <button type="submit" className="search-button" onClick={()=>setFilteredResData(filteredRestaurants)}>
//           <img src={searchIcon} alt="Search" />
//         </button>
//       </div>
//       <div className="filter-container">
//         <button
//           type="submit"
//           className="filter-button"
//           onClick={() => {
//             const topRated = restarentsData.filter(
//               (res) => res.info.avgRating > 4.5
//             );
//             setFilteredResData(topRated);
//           }}
//         >
//           <img src={topRatedImgUrl} alt="Search" />
//         </button>
//       </div>
//       <div className="card-container-something-like-that">
//         {filteredResData.map((restarent) => (
//           <RestroCard key={restarent.info.id} resDetails={restarent} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default BodyComponent;

import React, { useEffect, useState } from "react";
 import searchLogo from "../searchIcon.png";
import RestroCard from "./RestroCard";
import { 
  // mangaloreDataUrl,
  vizagDataUrl
} from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [restarentsData, setRestarentsData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRatedText, setTopRatedText] = useState("Top Rated Restaurants");
  useEffect(() => {
    fetchData();
    console.log("useEffect Called ")
  },[]);

  const fetchData = async () => {
    console.log("fetched data ")
    const data = await fetch(vizagDataUrl);
    const json = await data.json();
    console.log(json)
    setRestarentsData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("set data ");
    setfilterData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("set filterdata ");
  };

  const filteredRestaurants = restarentsData.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const changeSearch = (e) => {
    if (
      e.target.value !== undefined &&
      e.target.value !== "" &&
      e.target.value !== null
    ) {
      console.log("inside if : ", e.target.value);
      setSearchText(e.target.value);
      setfilterData(filteredRestaurants);
    } else {
      console.log("inside else : ", e.target.value);
      setSearchText("");
      setfilterData(restarentsData);
      setTopRatedText("Top Rated Restaurants");
    }
  };

  const onClickTopFilterRestro = () => {
    if (topRatedText === "Top Rated Restaurants") {
      console.log(restarentsData);
      const topRated = filterData.filter((res) => res.info.avgRating > 4.5);
      setfilterData(topRated);
      setTopRatedText("All Restaurants");
    } else {
      console.log(restarentsData);
      setfilterData(restarentsData);
      setTopRatedText("Top Rated Restaurants");
    }
  };

  return restarentsData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={searchText}
          onChange={(e) => {
            changeSearch(e);
          }}
          className="search-input"
        />
        <button
          type="submit"
          className="search-button"
          onClick={() => setfilterData(filteredRestaurants)}
        >
          <img src={searchLogo} alt="Search" />
        </button>
      </div>
      <div className="filter-container">
        <button
          type="submit"
          className="filter-button"
          onClick={() => {
            onClickTopFilterRestro();
          }}
        >
          {topRatedText}
        </button>
      </div>
      <div className="card-container-something-like-that">
        {filterData.map((restarent) => (
          <Link to={`/restaurents/${restarent.info.id}`} key={restarent.info.id}>
                    <RestroCard  resDetails={restarent} />
          </Link>

        ))}
      </div>
    </>
  );
};

export default BodyComponent;
