import React from "react";
import { render } from "react-dom";

import Prism from "prismjs";

import Presentation from "./presentation";

import "prismjs/components/prism-rust";
import "prismjs/themes/prism-tomorrow.css";


window.Prism = Prism;

render(<Presentation/>, document.getElementById("root"));
