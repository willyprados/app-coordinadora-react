/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.display}>
        <p className={classes.p}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="http://qualitycode.com.co/"
              target="_blank"
              className={classes.a}
            >
              Quality Code S.A.S.
            </a>
            , made with 
          </span>
          <Favorite className={classes.red}/>
           in Medellín
        </p>
      </div>
    </footer>
  );
}
