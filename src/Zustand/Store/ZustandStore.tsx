import { create } from "zustand";
import { TestingEnv } from "../Actions/UserAction";

export interface User{
    isdev: boolean;
    testing: boolean;
    testingEnv: () => void;
    setTesting: (value: boolean) => void;
}

export const UserStore = create<User>((set) => ({
    isdev: false,
    testing: true,

    testingEnv: () => {set({testing: TestingEnv()})},
    setTesting: (value) => {set({testing: value})}
}))