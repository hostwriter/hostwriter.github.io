
module.exports = {

    oninit(vnode) {},

    view(vnode) {

        return (
            <div class={"joke"}>
                <div class={"text"}>
                    <div
                        class={"setup"}
                        onclick={() => this.showPunchline = true }
                    >
                        {vnode.attrs.setup}
                    </div>
                    {this.showPunchline
                        ? [
                            <br />,
                            <div className={"punchline"}>
                                {vnode.attrs.punchLine}
                            </div>
                        ]
                        : null
                    }
                </div>
                <div class={"buttons"}>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        )
    }
}