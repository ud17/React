import { useContext } from "react";
import { AppContext } from "./App";

const User = () => {

    const { username } = useContext(AppContext);
    return (
        <div>
            Username typed...{username}
        </div>
    )
}

export default User;