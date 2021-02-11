import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({
  title,
  cases,
  total,
  active,
  isGreen,
  isRed,
  isYellow,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isYellow && "infoBox--yellow"}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h3
          className={`infoBox__cases ${isGreen && "infoBox__cases--green"} ${
            isRed && "infoBox__cases--red"
          }`}
        >
          {cases}
        </h3>

        <p
          className={`infoBox__total ${isGreen && "infoBox__cases--green"} ${
            isRed && "infoBox__cases--red"
          }`}
          color="textSecondary"
        >
          {total} Total
        </p>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
