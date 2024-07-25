import React from "react";

export default function Die(props) {
    return(
    <div className="flex items-center justify-center w-12 h-12 text-3xl font-bold shadow-md cursor-pointer rounded-xl">
        <h2>{props.value}</h2>
    </div>
    );
}