import { forwardRef, useImperativeHandle , useState} from "react";

const Button = forwardRef((props, ref) => {

    const[toggle, setData] = useState(false);

    // create anonymous function as second argument which will return an object
    // this anonymous function will contain functions which our parent might want to use
    useImperativeHandle(ref,()=> ({
        alterToggle() {
            setData(!toggle);
        }
    }))

    return(
        <div>
            <input type="button" value="Child Button"/>
            {toggle && <p>Text is visible</p>}
        </div>
    )
})

export default Button;