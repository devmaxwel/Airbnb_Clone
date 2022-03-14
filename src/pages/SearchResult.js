import React from "react";
import { MdFavorite } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import "./result.css";

const SearchResult = ({ data }) => {
  return (
    <div className="Searchresult">
      <img height="300px" src={data.img} alt={data.title} />
      <MdFavorite className="Searchresult_heart" />
      <div className="Searchresult_info">
        <div className="Searchresult_infotop">
          <p>{data.location}</p>
          <h3>{data.title}</h3>
          <p>______</p>
          <p>{data.description}</p>
        </div>
        <div className="Searchresult_infobottom">
          <div className="Searchresult_stars">
            <AiFillStar className='Searchresult_star' />
            <p>
              <strong>{data.star}</strong>
            </p>
          </div>

          <div className="searchresult_price">
            <h2>{data.price}</h2>
            <p>
              <strong>
                Total: <em>{data.total}</em>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
