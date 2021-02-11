import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

function Footer() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid className="footer-bottom-container" container justify="center">
      <Grid style={{ textAlign: "center" }} item md={2} sm={2} xs={12}></Grid>
      <Grid style={{ textAlign: "center" }} item md={8} sm={8} xs={12}>
        <Typography
          style={{ color: "#999999" }}
          className="footer-item"
          variant="caption"
          gutterBottom
        >
          &copy; {1900 + new Date().getYear()} COVID-19 Tracker , made with{" "}
          <Favorite
            style={{ width: 18, height: 14, position: "relative", top: 3 }}
          />{" "}
          by{" "}
          <a
            style={{ color: "#ffffff", textDecoration: "none" }}
            href="https://findhandry.web.app"
          >
            Handry
          </a>
          {" | "}
          <EmailIcon
            style={{ width: 18, height: 14, position: "relative", top: 3 }}
          />{" "}
          handrykanda@gmail.com
          <PhoneIcon
            style={{ width: 18, height: 14, position: "relative", top: 3 }}
          />
          +263 77 629 8599
          <Tooltip title="Follow me on facebook" placement="left">
            <Button
              href="https://www.facebook.com/handry.kandah"
              target="_blank"
              justIcon
              link
              style={{ color: "#ffffff" }}
            >
              <i className={"fab fa-facebook"} />
            </Button>
          </Tooltip>
          <Tooltip
            id="instagram-twitter"
            title="Follow me on twitter"
            placement="left"
          >
            <Button
              href="https://twitter.com/KandaHandry"
              target="_blank"
              color="transparent"
              style={{ color: "#ffffff" }}
            >
              <i className={"fab fa-twitter"} />
            </Button>
          </Tooltip>
          <Tooltip
            id="instagram-tooltip"
            title="Follow me on instagram"
            placement="left"
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/handrykandah"
              target="_blank"
              style={{ color: "#ffffff" }}
            >
              <i className={" fab fa-instagram"} />
            </Button>
          </Tooltip>
          <Tooltip
            id="linkedin-tooltip"
            title="Let's connect on linkedin"
            placement="left"
          >
            <Button
              color="transparent"
              href="https://www.linkedin.com/in/handry-kanda-480115186"
              target="_blank"
              style={{ color: "#ffffff" }}
            >
              <i className={" fab fa-linkedin"} />
            </Button>
          </Tooltip>
        </Typography>
      </Grid>
      <Grid style={{ textAlign: "center" }} item md={2} sm={2} xs={12}></Grid>
    </Grid>
  );
}

export default Footer;
