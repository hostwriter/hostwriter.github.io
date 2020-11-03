const m = require("mithril")

const Home = require("./views/Home")
const New = require("./views/New")
const Saved = require("./views/Saved")
const Layout = require("./views/Layout")

m.route(document.body, "/", {
    "/": {
        render: () => {
            return m(Layout, m(Home))
        }
    },
    "/new": {
        render: () => {
            return m(Layout, m(New))
        }
    },
    "/saved": {
        render: () => {
            return m(Layout, m(Saved))
        }
    }
})
