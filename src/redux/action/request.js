import React from "react";
import axios from "axios";
import { DOMAIN } from "../api";

export default function request(method, url, data) {
  method = method.toLocaleLowerCase();
  switch (method) {
    case "get":
      return axios.get(`${DOMAIN}/${url}`).catch(function(error) {
        console.log("Error:", error.message);
      });
    case "post":
      return axios.post(`${DOMAIN}/${url}`, data).catch(function(error) {
        console.log("Error:", error.message);
      });
    case "put":
      return axios.put(`${DOMAIN}/${url}`, data).catch(function(error) {
        console.log("Error:", error.message);
      });
    case "delete":
      return axios.delete(`${DOMAIN}/${url}`, { data }).catch(function(error) {
        console.log("Error:", error.message);
      });
    default:
      return "";
  }
}
