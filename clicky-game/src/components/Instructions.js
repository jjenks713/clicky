import React from "react";
import ContainerFluid from "./ContainerFluid"

function Instructions() {
    return (
        <div className="text-center" style={
        {  backgroundImage: "url(" + "https://hdqwalls.com/download/rick-and-morty-5k-fan-art-by-2048x1152.jpg" + ")",
        // backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
            <ContainerFluid>
                <div>
                    <p className="text-light p-5">
                    <h1>Clicky Game!</h1><br></br>
                        <h2>Click a picture to start, don't click the same one twice or you'll </h2>
                    </p>
                </div>
            </ContainerFluid>
        </div>
    );
};

export default Instructions;