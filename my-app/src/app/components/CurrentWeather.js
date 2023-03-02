import { useGetCurrentDataQuery } from "../services/weatherApi";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";

import { Box, Typography } from "@mui/material";

const CurrentWeather = ({ lat, lon }) => {
  let args = {
    lat: lat,
    lon: lon,
  };

  const {
    data: city = {},
    isLoading,
    isFetching,
    error,
  } = useGetCurrentDataQuery(args);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMsg />;
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        style={{
          color: "white",
          backgroundColor: "#7E57C2",
          minWidth: "70%",
          padding: "16px",
        }}
      >
        {city.name}
      </Typography>
      <Box>
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={`${city.weather[0].icon}`}
        />
      </Box>
      <Typography variant="h4" style={{ color: "white" }}>
        {city.main.temp} <span>&#176;</span>
      </Typography>
    </Box>
  );
};

export default CurrentWeather;
