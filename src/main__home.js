import "./styles/main.pcss"
if (process.env.NODE_ENV === "development") {
  require("file-loader!./pug/pages/home.pug")
}

import "./scripts/footerYearRefresh"
import "./scripts/overlayForm"
import "./scripts/burger-menu"
import "./scripts/news-tabs"
import "./scripts/slider--main"
import "./scripts/slider--sponsors"
import "./scripts/slider--photo"
import "./scripts/slider--video"
import "./scripts/slider--library"
import "./scripts/search"
import "./scripts/scrollToTop"
import "./scripts/overlayPhoto"

