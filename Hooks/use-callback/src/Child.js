import { useEffect } from "react";

const Child = (props) => {

    useEffect(() => {
        console.log("Child Function Triggered");
    }, [props.returnTitle])

    return(
        <div>
            Title:<br />
            {props.returnTitle("Udit")}
        </div>
    )
}

export default Child;