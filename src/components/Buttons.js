const Joke = require('../models/Joke')

module.exports = {

    view(vnode) {
        return (
            <div class={"col align-self-end btn text-secondary"}>
                <span
                    class={vnode.attrs.saved ? "text-success" : ""}
                    title={"Save this joke"}
                    onclick={() => Joke.save(vnode.attrs.id, vnode.attrs.saved)}>
                    <i class={"fas fa-save m-1 float-right"}/>
                </span>
                <span
                    class={vnode.attrs.disliked ? "text-danger" : ""}
                    title={"Dislike this joke"}
                    onclick={() => Joke.dislike(vnode.attrs.id, vnode.attrs.disliked)}>
                    <i class={"fas fa-arrow-down m-1 float-right"}>
                        {vnode.attrs.dislikes}
                    </i>
                </span>
                <span
                    class={vnode.attrs.liked ? "text-success" : ""}
                    title={"Like this joke"}
                    onclick={() => Joke.like(vnode.attrs.id, vnode.attrs.liked)}>
                    <i class={"fas fa-arrow-up m-1 float-right"}>
                        {vnode.attrs.likes}
                    </i>
                </span>
            </div>
        )
    }
}