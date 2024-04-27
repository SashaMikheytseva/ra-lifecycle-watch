import moment from "moment";
import { useState, useEffect } from "react";
import { IForm } from "../Form/Form";
import './Clock.css'

export interface IClock {
    item: IForm,
    remove: (formdata: IForm) => void;
}

export const Clock = ({item, remove}: IClock) => {
  
    const currentTimeInGMT = moment.utc();

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(currentTimeInGMT.clone().add(item.timezone, 'hours').format('HH:mm:ss'));
            console.log('интервалы работают');
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [currentTime, currentTimeInGMT]);

    return (
        <div className="clock">
            <h2>{item.name}</h2>
            <button className="remove-btn" onClick={()=> remove(item)}>Х</button>
            <div>{currentTime}</div>
        </div>
    )
}
