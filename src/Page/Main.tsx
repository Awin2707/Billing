import Testing from "./Testing/Testing";
import { UserStore, type User } from "../Zustand/Store/ZustandStore";
import LandingPage from "./Landing Page/LandingPage";

const Main = () => {

    const testUser = UserStore((state: User) => state.testing);

    return(
        <>
        {console.log(testUser)}
            {testUser ? <Testing/> : <LandingPage />}
        </>
    )
}
export default Main;