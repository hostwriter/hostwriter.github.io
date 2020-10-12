
module.exports = {

    view(vnode) {
        return (
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <div class="container">
                    <a class="navbar-brand" href="#">GPT Comedy</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/#!/new">New</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#!/saved">Saved</a>
                        </li>
                        </ul>
                        <span class="navbar-text">GPT Comedy</span>
                    </div>
                    </div>
                </nav>
                <div class="pt-5 mt-5">{vnode.children}</div>
            </div>
        )
    }
}