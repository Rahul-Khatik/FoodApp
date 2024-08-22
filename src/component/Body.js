import { useEffect, useState } from "react";
import Restaurant from "./RestaurantCard";
import { RestList } from "../util/list.js";

const Body = () => {
  const [allRestaurant, setAllRestaurants] = useState(RestList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const jsonData = await data.json();
      // console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setAllRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }catch (error) {
      console.error("Error fetching data:", error);
    }
  }


 

  const updates = () => {
    filteredData = allRestaurant.filter(ele => {
      return ele.info.avgRatingString > 4.4;
    });
    setAllRestaurants(filteredData);
  }

  return (
    <div className="body">
      <div className="search-bar">
        {/* <h3>Search</h3> */}
        <button className="filter-btn" onClick={updates}>Filter</button>
      </div>
      <div className="res-container">
      {Array.isArray(allRestaurant) && allRestaurant.map((ele) => (
      <Restaurant key={ele.info.id} resData={ele} />
    ))}
      </div>
    </div>
  )
}

export default Body;


// console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.info || jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
//       let dataSet = [];
//       jsonData.data.cards.forEach(element => {
//         dataSet.push(element.card.card.gridElements.infoWithStyle.info || element.card.card.gridElements.infoWithStyle.info);
//       }); 