import React from "react";
import "./Header.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

function Header({ country, countries, onCountryChange }) {
  return (
    <div className="app__header">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          style={{ height: 35 }}
          variant="outlined"
          value={country}
          onChange={onCountryChange}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
