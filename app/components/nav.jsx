function Navbar(params) {
    return (

        <header>

            <nav>
                <div className="title">
                    <a href="/">pdfManager</a>
                </div>
                <div className="nav-btn">
                    <button className="all-tools" >All tools</button>
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign up</button>
                </div>
            </nav>

        </header>
    )

}

export default Navbar;