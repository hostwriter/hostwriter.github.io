const Joke = require('../models/Joke')
const Status = require('../models/Likes')

module.exports = {

    oninit(vnode) {},

    view(vnode) {
        console.log(vnode.attrs)
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
                            <div className={"punchline"}>
                                {vnode.attrs.comments && vnode.attrs.comments.map(comment => {
                                    return comment.content
                                })}
                            </div>
                        ]
                        : null
                    }
                </div>
                <div class={"btn d-inline"}>
                <button 
                    class={vnode.attrs.saved ? "btn-primary m-1 float-right" : "btn-outline-primary m-1 float-right"}
                    onclick={() => Joke.save(vnode.attrs.id)}
                >
                    Save
                </button>

                <span class={"text-danger"}>
                    <i 
                        class={vnode.attrs.disliked ? "fas fa-thumbs-down m-1 float-right" : "far fa-thumbs-down m-1 float-right"}
                        onclick={() => Joke.dislike(vnode.attrs.id)}
                    />
                </span>{vnode.attrs.dislikes}
                
                <span class="text-success m-1 float-right fa-thumbs-up">
                <i 
                    class={vnode.attrs.liked ? "fas" : "far"}
                    onclick={() => Joke.like(vnode.attrs.id)}
                    
                />
                {vnode.attrs.likes}
                </span>
                </div>
            </div>
        )
    }
}