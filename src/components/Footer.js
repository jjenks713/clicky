import React from "react";
import { read } from "fs";

const footer = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "75px",
}

function Footer() {
    return (
        <footer className="text-center" style={
            {
                backgroundImage: "url(" + "https://hdqwalls.com/download/rick-and-morty-5k-fan-art-by-2048x1152.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                // bottom: 0,
                width: "100%",
                height: "100px",
                footer
            }}>
            <h3 class="text-white">Rick and Morty Clicky Game!</h3>
        </footer>
    );
};

export default Footer;