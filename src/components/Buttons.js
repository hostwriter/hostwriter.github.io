const Joke = require('../models/Joke')

module.exports = {

    view(vnode) {
        return (
            <div class={"col align-self-end text-secondary btn"}>
                <span
                    class={vnode.attrs.saved ? "fas text-danger" : "far"}
                    title={"Save this joke as a favorite"}
                    onclick={() => Joke.save(vnode.attrs.id, vnode.attrs.saved)}>
                    <i class={"fa-heart fa-lg m-1 float-right"}/>
                </span>
                <span
                    class={vnode.attrs.disliked ? "text-danger" : ""}
                    title={"Dislike this joke"}
                    onclick={() => Joke.dislike(vnode.attrs.id, vnode.attrs.disliked, vnode.attrs.leader)}>
                    <i class={"fas fa-arrow-down fa-lg m-1 float-right"}>
                        {vnode.attrs.dislikes || 0}
                    </i>
                </span>
                <span
                    class={vnode.attrs.liked ? "text-success" : ""}
                    title={"Like this joke"}
                    onclick={() => Joke.like(vnode.attrs.id, vnode.attrs.liked, vnode.attrs.leader)}>
                    <i class={"fas fa-arrow-up fa-lg m-1 float-right"}>
                        {vnode.attrs.likes || 0}
                    </i>
                </span>
                {vnode.attrs.comments && vnode.attrs.comments.length
                    ? <span
                        title={"Comments"}>
                            <i class={"far fa-comments fa-lg m-1 float-right"} onclick={() => vnode.attrs.showComments()} />
                    </span>
                    : null }
            </div>
        )
    }
}