const Buttons = require("./Buttons")

module.exports = {

    oninit(vnode) {},

    view(vnode) {
        return (
            <div class={"card shadow mb-3 p-3 bg-white rounded"}>
                <div class={"card-body"}>
                    <div
                        class={"card-text"}
                        onclick={() => this.showComments = true }
                    >
                        {vnode.attrs.content}
                    </div>
                    {this.showComments
                        ? [
                            <br />,
                            <div class={"punchline"}>
                                {vnode.attrs.comments && vnode.attrs.comments.map(comment => {
                                    return comment.content
                                })}
                            </div>
                        ]
                        : null
                    }
                </div>
                <Buttons {...vnode.attrs}/>
            </div>
        )
    }
}