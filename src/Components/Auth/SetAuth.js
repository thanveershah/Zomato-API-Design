import React from "react";
import axios from "axios";

const SetAuth = token => {
  if (token) {
    axios.defaults.headers.common["user-key"] = token;
  } else {
    delete axios.defaults.headers.common["user-key"];
  }
};

export default SetAuth;
