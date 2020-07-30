import "./styles/main.pcss"
if (process.env.NODE_ENV === "development") {
  require("file-loader!./pug/pages/home.pug")
}

import "./scripts/burger-menu"
import "./scripts/burger-menu-dropdown"
import "./scripts/news-tabs"
import "./scripts/slider--main"
import "./scripts/slider--sponsors"