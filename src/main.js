import "./styles/main.pcss"
if (process.env.NODE_ENV === "development") {
  require("file-loader!./pug/pages/home.pug")
}

import "./scripts/burger-menu"
import "./scripts/slider--main"
import "./scripts/slider--sponsors"
import "./scripts/news-tabs"
