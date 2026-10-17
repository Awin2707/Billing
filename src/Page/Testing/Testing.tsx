import { useEffect, useState } from 'react';
import test from '../../Style/Testing.module.css';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};


const Testing = () => {

    const date = new Date("2026-10-19T07:30:00+05:30").getTime();

    const calcualteTimeLeft = () => {
        const differ = date - Date.now();
        if(differ < 0){
            return { days : 0, hours: 0, minutes: 0, seconds: 0}
        }

        return {
            days: Math.floor(differ / (1000 * 60 * 60 * 24)),
            hours: Math.floor((differ / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((differ / (1000 * 60)) % 60),
            seconds: Math.floor((differ / 1000) % 60),
        }
    }

    const [timmer, setTimer] = useState<TimeLeft>(calcualteTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimer(calcualteTimeLeft);
        }, 1000);
        return () => {clearInterval(timer)}
    },[]);

    return(
        <div className={test.main}>
            <div className={test.subheading}>
                <h2>Comming Soon !</h2>
                <label>We have cooking some think better for you !</label>
                <label>Please Wiat</label>
                <label>{timmer.days} day {timmer.hours} : {timmer.minutes} : {timmer.seconds} </label>
            </div>
        </div>
    )

}
export default Testing;