import React from "react";

// const picStyle = {
//     width: "200px",
//     height: "200px",
//     borderWidth
// }


function Pictures(props) {
    return (

        <div>
                {/* {props.results.map(result => ( */}
                {/* key={result.id} */}
                    <div className="thumbnail float-left mr-5 mb-5 shadow border border-dark" key={props.id} onClick={() => props.clickImage(props.id)} >
                        <img style={{ width: "200px", height: "200px", borderWidth: "10px" }} alt="A Pic" src={props.image} />
                    </div>
                    
                {/* ))} */}
        </div>

    );
};

export default Pictures;