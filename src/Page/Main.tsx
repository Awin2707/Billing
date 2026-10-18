import Testing from "./Testing/Testing";
import { UserStore, type User } from "../Zustand/Store/ZustandStore";

const Main = () => {

    const testUser = UserStore((state: User) => state.testing);

    return(
        <>
        {console.log(testUser)}
            {testUser ? <Testing/> : null}
        </>
    )
}
export default Main;