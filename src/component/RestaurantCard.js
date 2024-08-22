import { IMAGE_URL } from "../util/config.js";

const Restaurant = (props) => {
  // console.log(props)
  return (
    <div className="res-card" >
      <img className="img1" src={IMAGE_URL+props.resData.info.cloudinaryImageId}  alt="res-logo"/>
      <h3>{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRating} Stars⭐</h4>
      <h4>Delivered in {props.resData.info.deliveryTime} minutes</h4>
      <h4>{props.resData.info.costForTwo} </h4>
    </div>
  )
}

// resname={ele.info.name} cuisines={ele.info.cuisines.join(", ")} star={ele.info.avgRating} time={ele.info.deliveryTime + " minute"} img={ele.info.cloudinaryImageId} price={ele.info.costForTwo}

export default Restaurant;