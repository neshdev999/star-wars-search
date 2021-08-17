import React, { useState, useEffect } from "react";
import "./Planet.css";

/* Planet - This access data from API into a Planet Component  
* This is used to fetch from api url received from fetchpeople responses
*/
function Planet(props) {
    const apiUrl = props.url;
    const [planetAndOtherData, setplanetAndOtherData] = useState({});

  useEffect(() => {
    const getPlanetAndOtherDataWithFetch = async () => {
      const response = await fetch(apiUrl);
      const outputData = await response.json();
      setplanetAndOtherData(outputData);
  };
    getPlanetAndOtherDataWithFetch();
  }, [apiUrl]);

      
    return (
      <div className="PlanetAndOtherItems">
          <div className="planet-item">{planetAndOtherData.name === undefined ? "No Data Available" : planetAndOtherData.name}</div>       
      </div>
    );
  }

export default Planet;
