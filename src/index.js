import "./styles/style.scss";
import logoImg from "./assets/kolmar1.svg";

import { camelCase } from "lodash";
console.log(camelCase("hello"));

const logo = document.getElementById("logo");
logo.src = logoImg;
