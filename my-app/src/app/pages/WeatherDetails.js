import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";

import { useParams } from "react-router-dom";

const WeatherDetails = () => {
  const { lat, lon } = useParams();

  return (
    <div>
      <CurrentWeather lat={lat} lon={lon} />
      <Forecast lat={lat} lon={lon} />
    </div>
  );
};

export default WeatherDetails;
