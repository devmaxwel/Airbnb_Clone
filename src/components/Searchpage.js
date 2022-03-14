import { Button, Card } from '@material-ui/core';
import React from 'react'
import SearchResult from '../pages/SearchResult';
import { Searchresult } from "../data/DUMMYDATA";
import './search.css'

const Searchpage = () => {
  return (
    <div className="searchPage">
      <div className="search_info">
        <p>62 stays. 26th March to 29th March. 2 Guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancelation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      {
        Searchresult.map((result) => {
          return (
            <Card style={{
              margin:"9px"
            }}>
              <SearchResult data={result} />
            </Card>
          );
        })
      }
    </div>
  );
}

export default Searchpage;