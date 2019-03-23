import React from "react";
import ContainerFluid from "./ContainerFluid"

function Instructions() {
    return (
        <div className="text-center bg-dark">
            <ContainerFluid>
                <div>
                    <p className="text-light p-5">
                    <h1>Clicky Game!</h1><br></br>
                        <h2>Click a picture to start, don't click the same one twice or you'll lose! </h2>
                    </p>
                </div>
            </ContainerFluid>
        </div>
    );
};

export default Instructions;