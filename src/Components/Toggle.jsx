import React from 'react';
import A from "../Context/A";

const myFunction = () =>{
 var element = document.getElementById("myDIV")
    element.classList.toggle("mystyle")
}

const Toggle = () => {
    return (
        <>
        <div>
            <p>Click the "Try it" button to toggle between adding and removing the "mystyle" class name of the DIV
                element:</p>

            <button onClick={myFunction}>Try it</button>

            <div id="myDIV">
                This is a DIV element.
            </div>

        </div>
            <A/>
        </>
    );
};

export default Toggle;