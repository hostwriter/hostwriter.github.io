const Buttons = require("./Buttons")

let colors = ["red", "green", "blue", "yellow"]

module.exports = {

    oninit(vnode) {

    },

    view(vnode) {
        vnode.attrs.showComments = () => {this.showComments = !this.showComments }
        return (
            <div class={"card"}>
            <div class={"shadow mb-3 p-3 rounded cursor-pointer " + colors[vnode.attrs.position % 4]} 
                 onclick={() => this.showBody = true }>
                <span class={"card-title"}>{vnode.attrs.author}</span>
                <div class={"card-body"}>
                    <div
                        class={"card-text"}
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
                    {this.showComments && vnode.attrs.comments && vnode.attrs.comments.length
                        ? [<br />,
                            <div>
                            {vnode.attrs.comments.map((comment, index) => {
                                return (
                                    <div class="col-sm align-self-left p-4 w-50">
                                    <div class={index % 2 == 0 ? "speech-bubble-left" : "speech-bubble-right"}>
                                        <div class={"ml-2 font-weight-lighter"}>{comment.author}:</div>
                                        <div class={"pb-2 ml-3 font-weight-light"}>{comment.body}</div>
                                        {comment.likes}
                                    </div>
                                    </div>
                                )
                            })}
                            </div>  
                        ]
                        : null
                    }
                </div>
                </div>
                <Buttons {...vnode.attrs}/>
            
            </div>
        )
    }
}