import React from "react";

function Pictures(props) {
    return (

        <div>
                {/* {props.results.map(result => ( */}
                {/* key={result.id} */}
                    <div className="thumbnail float-left mr-5 mb-5" key={props.id} onClick={() => props.clickImage(props.id)} >
                        <img style={{ width: "200px", height: "200px" }} alt="A Pic" src={props.image} />
                    </div>
                    
                {/* ))} */}
        </div>

    );
};

export default Pictures;