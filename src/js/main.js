import "../css/main.css";

import request from "./request";
import { createConutries } from "./updateUI";
import "./filter"
import "./mode"

const API = "https://restcountries.com/v3.1/all"

request(API).then((data) => {
    createConutries(data);
  })
  .catch((err) => {
    console.log();(err.message);
  });
