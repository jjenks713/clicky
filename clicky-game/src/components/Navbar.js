import React from "react";
import Container from "./Container"
import Score from "./Score";

function Navbar() {
    return (
        <div>
            <Container>
                <nav className="navbar navbar-white bg-white">
                    <span className="navbar-brand mb-0 h1">Clicky Game</span>
                    <span className="text-center">Click an Image to get started</span>
                    <span><Score></Score></span>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;