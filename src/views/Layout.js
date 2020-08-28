
module.exports = {

    view(vnode) {
        return (
            <div class={"main layout"}>
                <div class={"nav menu"} id={"navigation"}>
                    <m.route.Link href={"/"}>Home</m.route.Link>
                </div>
                <div class={"section"}>{vnode.children}</div>
            </div>
        )
    }
}