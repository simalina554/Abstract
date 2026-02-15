function Header() {
    return(
    <header className="header">
        <div className="logo-group">
            <div className="step1">
                <span className="material-symbols-outlined">potted_plant</span>
                <span>Abstract</span>
                <div className="line"></div>
                <span className="help">Help Center</span>
            </div>
        </div>
        <div className="auth-group">
            <button className="btn btn-outline">Submit a request</button>
            <button className="btn btn-inline">Sign in</button>
        </div>
    </header>
    )
}

export default Header;