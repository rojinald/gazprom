import React from "react";

export default function Main ({toggle}) {
    return (
        <>
        <h1>Привет c Context</h1>
        <button onClick={toggle} >Показать alert</button>
        </>
    )

}