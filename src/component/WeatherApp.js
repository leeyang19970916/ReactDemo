import Dog from "../images/柯基.jpg";
// import { ReactComponent as RainIcon } from '../images/柯基.jpg';
// import { useState } from "react";

import React, {
  useState,useEffect
} from 'react';
const WEATHER = () => {

  // let locationData =""
  const [currentWeather, setCurrentWeather] = useState({
    time: "2022/10/11 週二 下午4:50",
    local: "台北市",
    description: "天氣乾冷",
    temperature: 21.5,
    windSpeed: 0.3,
    humid: 0.88
  });
  const handleClick = async () => {
    try {
      const getUrl = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-8EE21382-44ED-437A-863F-0A251FC3BFB6`
      // 取得遠端資源
      const res = await fetch(`${getUrl}`)
      // 使用 response.json() 將資源轉為 JSON 格式
      const json = await res.json();
      const locationData = json.records.location[0];
      // console.log(locationData);
              // STEP 2：將風速（WDSD）、氣溫（TEMP）和濕度（HUMD）的資料取出
              const weatherElements = locationData.weatherElement.reduce(
                (neededElements, item) => {
                  if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
                    neededElements[item.elementName] = item.elementValue;
                  }
                  return neededElements;
                },
                {},
              );
      
              // STEP 3：要使用到 React 組件中的資料
              setCurrentWeather({
                observationTime: locationData.time.obsTime,
                locationName: locationData.locationName,
                description: '多雲時晴',
                temperature: weatherElements.TEMP,
                windSpeed: weatherElements.WDSD,
                humid: weatherElements.HUMD,
              });

    } catch (error) {
      console.log(error, "error")
    }
  }
  // console.log(handleClick,"handleClick")

console.log(currentWeather,"currentWeather")
  return (
    <div>
      <div className="btn btn-danger" onClick={handleClick}>撈API資料</div>
      <div><img src={Dog} className='w-25'></img></div>
      <div className="weather">
        <main className="bg-white main">
          <div className="city text-dark">城市:{currentWeather.locationName}</div>
          <div className="city text-dark">日期:{currentWeather.observationTime}</div>
          <div className="status text-secondary">天氣狀況:{currentWeather.description}</div>
          <div className="temperature text-secondary">溫度:{currentWeather.temperature}<span>.c</span></div>
          <div className="windSpeed text-secondary">風速:{currentWeather.windSpeed}m/h</div>
          <div className="humidity text-secondary">濕度:{currentWeather.humid}</div>
        </main>
      </div>
    </div>

  )
}
export default WEATHER