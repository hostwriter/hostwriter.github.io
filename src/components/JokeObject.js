const Buttons = require("./Buttons")

module.exports = {

    oninit(vnode) {

    },

    view(vnode) {
        console.log(vnode)
        vnode.attrs.showComments = () => {this.showComments = !this.showComments }
        return (
            <div class={"card shadow mb-3 p-3 bg-white rounded"}>
                <span class={"card-title"}>{vnode.attrs.author}</span>
                <div class={"card-body"}>
                    <div
                        class={"card-text cursor-pointer"}
                        onclick={() => this.showBody = true }
                    >
                        {vnode.attrs.title}
                    </div>
                    {this.showBody
                        ? [
                            <br />,
                            <div class={"col align-self-left font-italic ml-3"}>
                                {vnode.attrs.body}
                            </div>
                        ]
                        : null
                    }
                    {vnode.attrs.comments && vnode.attrs.comments.length && this.showComments
                        ? [<br />,
                            <span class={"text-muted"}>Comments</span>,
                            <div class={"shadow m-3"}>
                            <div class={"border bg-light"}>
                                <div class={"border"}>
                                    {vnode.attrs.comments && vnode.attrs.comments.map(comment => {
                                        return (
                                            <div class={"mb-2"}>
                                                <div class={"card-title border-top ml-2 font-weight-lighter"}>{comment.author}:</div>
                                                <div class={"pb-2 ml-3 font-weight-light"}>{comment.body}</div>
                                                {comment.likes}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
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