import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//app component
import Header from "../components/Header";
import DropDown from "../components/DropDown";
import WeatherDetails from "./WeatherDetails";

const Routes = () => {
  window.history.pushState({}, "", "/weatherapi/50.099998/1.83333");

  return (
    <BrowserRouter basename="/weatherapi">
      <Header />
      <DropDown />
      <Switch>
        <Route exact path={`/:lat/:lon`} component={WeatherDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
