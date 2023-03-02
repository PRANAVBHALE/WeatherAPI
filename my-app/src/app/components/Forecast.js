import { useGetForecastDataQuery } from "../services/weatherApi";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import { Box, Typography } from "@mui/material";

const Forecast = ({ lat, lon }) => {
  let args = {
    lat: lat,
    lon: lon,
  };

  const {
    data: forecast = [],
    isLoading,
    isFetching,
    error,
  } = useGetForecastDataQuery(args);

  const { list } = forecast;

  const epochToDay = (epochValue) =>
    new Date(epochValue * 1000).toString().substring(0, 3);

  const multiplesOf = (numbers, number) => {
    let multiples = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers.indexOf(numbers[i]) % number === 0) {
        multiples.push(numbers[i]);
      }
    }

    return multiples;
  };

  const getWeather = (weather, listEl) => {
    return weather.map((we) => {
      return (
        <>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={`http://openweathermap.org/img/wn/${we.icon}@2x.png`}
              alt={`${we.icon}`}
              width="100px"
              height="100px"
            />
          </Box>
          <Typography variant="h4" style={{ color: "white" }}>
            {listEl.main.temp_min} <span>&#176;</span>
          </Typography>
          <Typography variant="h4" style={{ color: "white" }}>
            {listEl.main.temp_max} <span>&#176;</span>
          </Typography>
        </>
      );
    });
  };

  const mapList = () => {
    return multiplesOf(list, 24 / 3)
      .slice(1, 4)
      .map((el) => {
        return (
          <Box
            style={{
              color: "white",
              backgroundColor: "#7E57C2",
              padding: "16px",
            }}
          >
            <spam style={{ fontSize: "32px" }}>{epochToDay(el.dt)}</spam>
            {getWeather(el.weather, el)}
          </Box>
        );
      });
  };

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMsg />;
  }

  if (forecast) {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {mapList()}
        </Box>
      </Box>
    );
  }
};

export default Forecast;
