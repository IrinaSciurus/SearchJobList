import React from "react";

function Header(){
    return (
        <nav className="navbar is-danger has-shadow is-spaced"
            role="navigation"
            aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <h2 className="is-size-2">RemoteJobify</h2>
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Header;