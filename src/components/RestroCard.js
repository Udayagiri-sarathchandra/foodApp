import {restroImageUrl} from "../utils/constants";
const RestroCard = (props) => {
   
    const { resDetails } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      locality,
      areaName,
      sla,
    } = resDetails?.info;
    return (
      <div className="resto-card">
        <img
          src={`${restroImageUrl}/${cloudinaryImageId}`}
          alt="no data"
        />
        <div className="resto-name">{name}</div>
        <div className="restro-details-something-like-that-i-mean">
          <p>
            {cuisines.join(",")}
            <span className="align-right">{costForTwo}</span>
          </p>
          <p>
            {locality}, {areaName}
            <span className="align-right">
              {sla.lastMileTravelString}
            </span>
          </p>
          <button type="button" className="discount-btn">
            Flat 20% off on pre-booking
          </button>
          <p className="extra">Get extra 10% off using GIRFSAVE150</p>
        </div>
      </div>
    );
 };
 
 export default RestroCard