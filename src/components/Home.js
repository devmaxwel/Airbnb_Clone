import React from "react";
import Banner from "./Banner";
import "./home.css";
import { DUMMY_DATA1, DUMMY_DATA2 } from "../data/DUMMYDATA";
import SingleHouse from "./SingleHouse";
import Card from "../interface/Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="home_section">
        {DUMMY_DATA1.map((data) => {
          return (
            <Card key={data.id}>
              <SingleHouse data={data} />
            </Card>
          );
        })}
      </div>
      <div className="home_section">
        {DUMMY_DATA2.map((data) => {
          return (
            <Card key={data.id}>
              <SingleHouse data={data} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
