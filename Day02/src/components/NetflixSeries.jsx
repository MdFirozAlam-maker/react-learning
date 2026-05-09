import seriesData from "../api/seriesData.json";
import "../index.css"


import React from "react";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((series) => {
        return (
            <SeriesCard key={series.id} {...series} />
        )
        
      })}
    </ul>
  );
};
export default NetflixSeries;
