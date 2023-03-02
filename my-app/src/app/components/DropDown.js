import * as React from "react";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cityList from "../cities data/cities-fr.json";

export default function DropDown() {
  console.log(cityList[0].nm);
  let history = useHistory();
  const [city, setCity] = React.useState({});

  const handleChange = (event) => {
    let { lat, lon } = event.target.value;
    setCity(event.target.value);
    history.push(`/${lat}/${lon}`);
  };

  if (city) {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "150px",
        }}
      >
        <Box style={{ width: "20%" }} sx={{ minWidth: 120 }}>
          <FormControl style={{ backgroundColor: "white" }} fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city.nm}
              label="Age"
              onChange={handleChange}
              defaultValue={cityList[0]}
            >
              {cityList.map((item) => {
                return (
                  <MenuItem key={item.id} value={item}>
                    {item.nm}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
    );
  }
}
