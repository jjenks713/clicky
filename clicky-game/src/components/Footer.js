import React from "react";

const footer = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60px",
}

function Footer() {
    return (
                <footer className="bg-light" style={footer}>
                    <span className="navbar-brand mb-0 h1">Clicky Game</span>
                </footer>
    );
};

export default Footer;