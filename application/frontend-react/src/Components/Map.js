import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([0, 20])
  .range([
    "#eaecee",
    "#aed6f1",
    "#be3d26",
    "#2e86c1",
    "#1b4f72"  
  ]);


const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("../final_dataset_11.csv").then(counties => {
      setData(counties);
    });
  }, []);

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = data.find(s => s.id === geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={colorScale(cur ? cur.arithmetic_mean : "#EEE")}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;