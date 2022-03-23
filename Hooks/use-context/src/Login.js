import { useContext } from "react";
import { AppContext } from "./App";

const Login = () => {
    const { setUsername } = useContext(AppContext);

    const HandleChange = (event) => {
        const username = event.target.value;
        setUsername(username)
    }
    return (
        <div>
            <input type="text" onChange={HandleChange}/>
        </div>
    )
}

export default Login;