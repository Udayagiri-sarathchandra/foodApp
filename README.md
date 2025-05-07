# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


   // Destructuring the array of objects
    // const destructuredData = objData.map(({ info }) => {
    //   const {
    //     id,
    //     name,
    //     cloudinaryImageId,
    //     locality,
    //     areaName,
    //     costForTwo,
    //     cuisines
    //   } = info;
  
    //   return {
    //     id,
    //     name,
    //     cloudinaryImageId,
    //     locality,
    //     areaName,
    //     costForTwo,
    //     cuisines,
    //   };
    // });
  
    // return (
    //   <div className="restro-card">
    //     {destructuredData.map((restaurant) => {
    //       const {
    //         name,
    //         cloudinaryImageId,
    //         locality,
    //         areaName,
    //         costForTwo,
    //         cuisines
    //       } = restaurant;
  
    //       return (
    //         <div key={restaurant.id} className="restaurant-card">
    //           <img
    //             src={`${imageUrl}/${cloudinaryImageId}.jpg`}
    //             alt={name}
    //             className="restaurant-image"
    //           />
    //           <h2>{name}</h2>
    //           <p>{locality}, {areaName}</p>
    //           <p>{costForTwo}</p>
    //           <p>Cuisines: {cuisines.join(", ")}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );


    // import { useState, useEffect } from "react";
// // import { restarentInfo } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

// const RestroInfo = () => {
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);
//   // const [resInfo, setResInfo] = useState(null);
//   // useEffect(() => {
//   //   fetchResInfo();
//   // }, []);
//   // const fetchResInfo = async () => {
//   //   const data = await fetch(restarentInfo + resId);
//   //   const json = await data.json();
//   //   setResInfo(json?.data?.cards);
//   //   console.log(json?.data?.cards);
//   // };

//   if (resInfo === null) {
//     return <Shimmer />;
//   }
//   const { name, costForTwoMessage, cuisines, avgRating } =
//     resInfo[2]?.card?.card?.info;
//   //const {itemCards , title} = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   // const { itemCards, title } =
//   //   resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   // const {itemCards , title} = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
//   // const {itemCards , title} = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

//   // const [
//   //   ,
//   //   // Skip index 0
//   //   card1Data,
//   //   card2Data,
//   //   card3Data,
//   //   card4Data,
//   //   card5Data,
//   //   card6Data,
//   //   card7Data,
//   //   card8Data,
//   //   card9Data,
//   //   card10Data,
//   // ] = resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  
//   // const section1 = card1Data?.card?.card;
//   // const section2 = card2Data?.card?.card;
//   // const section3 = card3Data?.card?.card;
//   // const section4 = card4Data?.card?.card;
//   // const section5 = card5Data?.card?.card;
//   // const section6 = card6Data?.card?.card;
//   // const section7 = card7Data?.card?.card;
//   // const section8 = card8Data?.card?.card;
//   // const section9 = card9Data?.card?.card;
//   // const section10 = card10Data?.card?.card;
  
//   // const section1Data = section1
//   //   ? { itemCards: section1.itemCards, title: section1.title }
//   //   : null;
//   // const section2Data = section2
//   //   ? { itemCards: section2.itemCards, title: section2.title }
//   //   : null;
//   // const section3Data = section3
//   //   ? { itemCards: section3.itemCards, title: section3.title }
//   //   : null;
//   // const section4Data = section4
//   //   ? { itemCards: section4.itemCards, title: section4.title }
//   //   : null;
//   // const section5Data = section5
//   //   ? { itemCards: section5.itemCards, title: section5.title }
//   //   : null;
//   // const section6Data = section6
//   //   ? { itemCards: section6.itemCards, title: section6.title }
//   //   : null;
//   // const section7Data = section7
//   //   ? { itemCards: section7.itemCards, title: section7.title }
//   //   : null;
//   // const section8Data = section8
//   //   ? { itemCards: section8.itemCards, title: section8.title }
//   //   : null;
//   // const section9Data = section9
//   //   ? { itemCards: section9.itemCards, title: section9.title }
//   //   : null;
//   // const section10Data = section10
//   //   ? { itemCards: section10.itemCards, title: section10.title }
//   //   : null;
  
//   // const menuSections = [
//   //   section1Data,
//   //   section2Data,
//   //   section3Data,
//   //   section4Data,
//   //   section5Data,
//   //   section6Data,
//   //   section7Data,
//   //   section8Data,
//   //   section9Data,
//   //   section10Data,
//   // ].filter(Boolean);
  
//   // console.log(menuSections);

//   const cardsData = resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

// // const menuSections = cardsData
// //   .slice(1, 11) // Process only up to 10 cards (excluding the first)
// //   .map(cardData => cardData?.card?.card) // Extract the inner card
// //   .filter(card => card) // Filter out any undefined or null cards
// //   .map(card => ({  // Transform to the desired format
// //     itemCards: card.itemCards,
// //     title: card.title,
// //   }));

// const menuSections = cardsData
//   .slice(1) // Exclude the first card
//   .map(cardData => cardData?.card?.card) // Extract the inner card
//   .filter(card => card) // Filter out any undefined or null cards
//   .map(card => ({  // Transform to the desired format
//     itemCards: card.itemCards,
//     title: card.title,
//   }));

// console.log(menuSections);
  
//   return (
//     <>
//       <div style={{ paddingLeft: "25%", border: "1px solid", margin: "10%" }}>
//         <h1>{name}</h1>
//         <p>{cuisines.join(",")}</p>
//         <p>{costForTwoMessage}</p>
//         <p>{avgRating}</p>
//       </div>
//       <div style={{ paddingLeft: "25%", border: "1px solid", margin: "10%" }}>
//         {/* <h1>Menu</h1> */}
//         {/* <h2>{title} ({itemCards.length})</h2>  */}
//         {/* <ul>
//           {itemCards.map((item) => (
//             <li key={item.card.info.id}>{item.card.info.name} </li>
//           ))}{" "}
//         </ul> */}

//         <h1>Menu</h1>
//         {menuSections.length === 0 ? (
//           <p>No menu sections found.</p>
//         ) : (
//           <ul>
//             {menuSections.map((section, index) => (
//               <li key={index}>
//                 <h2>{section.title}</h2>
//                 {section.itemCards ? (
//                   <>
//                     {/* <p>Contains {section.itemCards.length} items.</p>   */}
//                     <ul>
//                       {section.itemCards.map((item) => (
//                         <li key={item.card.info.id}>{item.card.info.name} </li>
//                       ))}{" "}
//                     </ul>
//                   </>
//                 ) : (
//              <p></p>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };
// export default RestroInfo;

  