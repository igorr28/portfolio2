import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/menu-modal";
import "./scripts/parallax";

// import "./scripts/reviews";
import "./scripts/reviews-slider";


