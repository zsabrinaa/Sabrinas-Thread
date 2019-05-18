import React from "react";

 export function Image(props){
    return(
    <div>
    <a href ={props.link}> <img className="responsive-img"src={props.src}/>
    </a>
    </div>
    );
}
