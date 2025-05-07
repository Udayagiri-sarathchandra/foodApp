import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroInfo = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //custom hook
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines, avgRating } = resInfo[2]?.card?.card?.info;
  const cardsData = resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []; 
  const menuSections = cardsData
  .slice(1) // Exclude the first card
  .map(cardData => cardData?.card?.card) // Extract the inner card
  .filter(card => card) // Filter out any undefined or null cards
  .map(card => ({  // Transform to the desired format
    itemCards: card.itemCards,
    title: card.title,
  }));
 console.log(menuSections);
  
  return (
    <>
      <div style={{ paddingLeft: "25%", border: "1px solid", margin: "10%" }}>
        <h1>{name}</h1>
        <p>{cuisines.join(",")}</p>
        <p>{costForTwoMessage}</p>
        <p>{avgRating}</p>
      </div>
      <div style={{ paddingLeft: "25%", border: "1px solid", margin: "10%" }}>
        {/* <h1>Menu</h1> */}
        {/* <h2>{title} ({itemCards.length})</h2>  */}
        {/* <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} </li>
          ))}{" "}
        </ul> */}

        <h1>Menu</h1>
        {menuSections.length === 0 ? (
          <p>No menu sections found.</p>
        ) : (
          <ul>
            {menuSections.map((section, index) => (
              <li key={index}>
                <h2>{section.title}</h2>
                {section.itemCards ? (
                  <>
                    {/* <p>Contains {section.itemCards.length} items.</p>   */}
                    <ul>
                      {section.itemCards.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name} </li>
                      ))}{" "}
                    </ul>
                  </>
                ) : (
             <p></p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default RestroInfo;