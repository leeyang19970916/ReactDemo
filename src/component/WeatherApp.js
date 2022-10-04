// import Dog from "../images/柯基.jpg";
// import { useState } from "react";
import React, {
  useState
} from 'react';
const weather = () => {
  // const [a,aaaaa]=useState(0)
  const handleClick = () => {
    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-8EE21382-44ED-437A-863F-0A251FC3BFB6"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        const locationData = data.records.location[0];
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {})
      });
  };
  // const [currentWeather, setCurrentWeather] = useState(1); 
  return (
    <div className="btn btn-danger" onClick={handleClick}>撈API資料</div>
    // <div className="bg-secondary weather">
    //     <div className="main">
    //         <div className="text-dark fs-4">城市:{currentWeather.locationName}</div>
    //         <div>天氣描述:{currentWeather.description}</div>
    //         <div className="fs-1">溫度: {currentWeather.temperature}°C</div>
    //         <div>風速:{currentWeather.windSpeed}m/h</div>
    //         <div>濕度:{currentWeather.humid}%</div>
    //     </div>
    //     <div className="image">
    //         <img className="w-100" src={Dog} alt="Dog" /></div>
    // </div>
  )
}
export default weather