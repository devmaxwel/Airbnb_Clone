import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import DatePicker from "./DatePicker";

const Banner = () => {

    const [showSearch, setSearch] = useState(false)


  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <DatePicker />}

        <Button
          onClick={() => setSearch(!showSearch)}
          className="banner_searchButton"
          vaiant="outlined"
        >
          {!showSearch ? "Search Dates" : "Hide Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button varinat="outlined">
          <Link style={{
            textDecoration:"none",
            color:"inherit"
          }} to='/search/page'>Explore Nearby</Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
