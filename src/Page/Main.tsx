import { useEffect, useState } from "react";
import Testing from "./Testing/Testing";

const Main = () => {
    const[test, setTest] = useState<boolean>(false);

    useEffect(() => {
        setTest(true);
    },[]);

    return(
        <>
        { console.log(test)}
            {test ? <Testing/> : null}
        </>
    )
}
export default Main;