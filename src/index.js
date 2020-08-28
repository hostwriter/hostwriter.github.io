const m = require("mithril")

const Home = require("./views/Home")
const Layout = require("./views/Layout")

m.route(document.body, "/", {
    "/": {
        render: () => {
            return m(Layout, m(Home))
        }
    }
})